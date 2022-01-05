import { IBet, IBetError, IGameRole, ILotteryRoles, Token, User } from "@src/store/interfaces";
import { AuthActionsType, authReducer } from "@src/store/reducer/authReducer";
import { BetActionsType, betReducer } from "@src/store/reducer/betReducer";
import { CartActionsType, cartReducer } from "@src/store/reducer/cartReducer";
import React, { useEffect, useReducer, useState } from "react";

interface IAppContext {
  lotteryRoles: ILotteryRoles,
  isLogged: boolean;
  windowWidth: number;
  currentGameRole: IGameRole;
  currentBet: number[]
  cartItems: IBet[];
  cartTotal: number;
  recentsBet: IBet[];
  betError: IBetError;

  setLotteryRoles: (roles: ILotteryRoles) => void;
  logIn: (token: Token, user: User) => void;
  logOut: () => void;
  updateCurrentTypeGame: (newCurrentTypeGame: IGameRole, isToggleable: boolean) => void;
  getRole: (gameId: number) => IGameRole
  addBetNumber: (number: number) => void;
  removeBetNumber: (number: number) => void;
  clearCurrentBet: () => void;
  completeCurrentBet: () => void;
  addCartItem: () => void;
  removeCartItem: (id: number) => void;
  clearCart: () => void;
  addRecentsBet: (newRecentsBet: IBet[]) => void;
  setBetError: (error: IBetError) => void
}

export const AppContext = React.createContext({} as IAppContext);

export const initialGameRole: IGameRole = {id: 0, color: '', description: '', max_number: 0, price: 0, range: 0, type: ''}
export const initialUser: User = {id: 0, created_at: '', email: '', is_admin: 0, name: '', picture: '', token: '', token_created_at: '', updated_at: ''}
const initialBet: number[] = []
const initialCart: IBet[] = []
export const initialBetError: IBetError = {isError: false, message: '', icon: '', color: ''}

export const AppProvider: React.FC = (props) => {
  const [lotteryRoles, setLotteryRoles] = useState<ILotteryRoles>({min_cart_value: 0, types: []});
  const [isLogged, dispatchAuth] = useReducer(authReducer, false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentGameRole, setCurentGameRole] = useState<IGameRole>(initialGameRole);
  const [currentBet, dispatchBet] = useReducer(betReducer, initialBet)
  const [cartItems, dispatchCart] = useReducer(cartReducer, initialCart)
  const [cartTotal, setCartTotal] = useState(0);
  const [recentsBet, setRecentsBet] = useState<IBet[]>([]);
  const [userInfo, setUserInfo] = useState<User>(initialUser)
  const [betError, setBetError] = useState<IBetError>(initialBetError);

  const logIn = (token: Token, user: User) => {
    dispatchAuth({ type: AuthActionsType.LOGIN, payload: token })
    setUserInfo(user)
  }

  const logOut = () => {
    dispatchAuth({ type: AuthActionsType.LOGIN })
    setUserInfo(initialUser)
  }

  const updateCurrentTypeGame = (newCurrentTypeGame: IGameRole, isToggleable: boolean) => {
    if (currentGameRole.type === newCurrentTypeGame.type && isToggleable) {
      setCurentGameRole(initialGameRole);
      return;
    }

    setCurentGameRole(newCurrentTypeGame);
    dispatchBet({ type: BetActionsType.CLEAR_GAME, payload: { number: 0 }})
  };

  const getRole = (gameId: number) => {
    return lotteryRoles.types.find(role => role.id === gameId)!
  }
  
  const addBetNumber = (number: number) => {
    if (currentBet.length < currentGameRole.max_number) {
      dispatchBet({ type: BetActionsType.ADD_NUMBER, payload: { number } })
      return
    }

    setBetError({isError: true, message: 'Max number limit for this game has been reached', icon: 'exclamation', color: '#f6ab2f'})
  }
  
  const removeBetNumber = (number: number) => {
    if (currentBet.length > 0)
      dispatchBet({ type: BetActionsType.REMOVE_NUMBER, payload: { number } })
  }
  
  const clearCurrentBet = () => {
    if (currentBet.length > 0)
      dispatchBet({ type: BetActionsType.CLEAR_GAME, payload: { number: 0 }})
  }
  
  const completeCurrentBet = () => {
    dispatchBet({ type: BetActionsType.COMPLETE_GAME, payload: { number: 0, currentRole: currentGameRole }})
  }

  const addCartItem = () => {
    const sortedNewItem = currentBet.sort((a: number, b: number) => a - b)
    if(currentBet.length === currentGameRole.max_number && !cartItems.some(item => item.choosen_numbers === sortedNewItem.toLocaleString())) {
      const newCartItem: IBet = { id: Date.now(), choosen_numbers: sortedNewItem.toLocaleString(), created_at: new Date().toJSON(), updated_at: new Date().toJSON(), game_id: currentGameRole.id, price: currentGameRole.price, user_id: userInfo.id }

      setCartTotal(prevTotal => prevTotal + newCartItem.price)
      dispatchCart({type: CartActionsType.ADD_ITEM, payload: { newCartItem }});
      clearCurrentBet()
      return
    }

    if (cartItems.some(item => item.choosen_numbers === currentBet.toLocaleString())) {
      setBetError({isError: true, message: 'This bet is already on the cart', icon: 'x', color: '#ee5754'})
      return
    }
    
    setBetError({isError: true, message: `You need ${currentGameRole.max_number - currentBet.length} numbers to fill your bet`, icon: 'exclamation', color: '#f6ab2f'})
  };

  const removeCartItem = (id : number) => {
    const item = cartItems.find(element => element.id === id)
    setCartTotal(prevTotal => prevTotal - (item ? item.price : 0))

    dispatchCart({type: CartActionsType.REMOVE_ITEM, payload: { id }});
  };

  const clearCart = () => {
    dispatchCart({type: CartActionsType.CLEAR_CART, payload: {}})
    setCartTotal(0)
  }

  const addRecentsBet = (newRecentsBet: IBet[]) => {
    setRecentsBet(newRecentsBet)
  }

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () =>
    window.removeEventListener("resize", () =>
      setWindowWidth(window.innerWidth)
    );
  }, []);

  return (
    <AppContext.Provider
      value={{
        lotteryRoles,
        isLogged,
        windowWidth,
        currentGameRole,
        currentBet,
        cartItems,
        cartTotal,
        recentsBet,
        betError,
        
        setLotteryRoles,
        logIn,
        logOut,
        updateCurrentTypeGame,
        getRole,
        addBetNumber,
        removeBetNumber,
        clearCurrentBet,
        completeCurrentBet,
        addCartItem,
        removeCartItem,
        clearCart,
        addRecentsBet,
        setBetError
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
