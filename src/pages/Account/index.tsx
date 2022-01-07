import { AppContainer, Loading } from "@src/components";
import { initialUser } from "@src/context";
import { IRequestInfo, User } from "@src/shared/interfaces";
import { useEffect, useState } from "react";
import { Article, Content } from "./style";
import { MyAccount, UpdateMyUser } from "@src/shared/services";
import { INewUserInfo } from "./interface";

const initialRequestInfo: IRequestInfo<User, boolean> = {
  loading: true,
  data: initialUser,
  error: false,
  success: false,
};

const Account: React.FC = () => {
  const [requestInfo, setRequestInfo] = useState<IRequestInfo<User, boolean>>(initialRequestInfo);
  const [isEditing, setIsEditing] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState<INewUserInfo>({ name: '', email: '' });

  const editingHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsEditing(false);
    console.log('entrei');
  };

  const fetchGetUser = async () => {
    const response = await MyAccount();

    if (response)
      setRequestInfo((prevInfo) => {return { ...prevInfo, loading: false, data: response as User }})
  };

  const fetchUpdateUser = async () => {
    const response = await UpdateMyUser(newUserInfo)

    if (response) {
      setRequestInfo(prevInfo => {return { ...prevInfo, success: false, data: response as User }})
    }
  }

  useEffect(() => {
    if (requestInfo.loading) {
      fetchGetUser()
    }

    if (requestInfo.success) {
      setRequestInfo(prevInfo => {return { ...prevInfo, success: false }})
      fetchUpdateUser()
    }

    if (isEditing) setNewUserInfo({ name: requestInfo.data.name, email: requestInfo.data.email })

  }, [isEditing, requestInfo]);

  if (requestInfo.loading) return <Loading />;

  if (isEditing)
    return(
      <AppContainer>
        <Content>
          <form onSubmit={editingHandler}>
            <div>
              <h3>
                <i className="bi bi-person-fill" /> Your Info
              </h3>
              <button onClick={() => setRequestInfo((prevInfo) => { return { ...prevInfo, success: true }})}>
                Save
              </button>
            </div>

            <div>
              <Article>
                <p>Name</p>
                <input
                  type="text"
                  name="newName"
                  id="newName"
                  onChange={(e) =>
                    setNewUserInfo((prev) => {
                      return { ...prev, name: e.target.value };
                    })
                  }
                  value={newUserInfo.name}
                />
              </Article>

              <Article>
                <p>Email</p>
                <input
                  type="email"
                  name="newEmail"
                  id="newEmail"
                  onChange={(e) =>
                    setNewUserInfo((prev) => {
                      return { ...prev, email: e.target.value };
                    })
                  }
                  value={newUserInfo.email}
                />
              </Article>

              <Article>
                <p>Desde</p>{" "}
                <p>{new Date(requestInfo.data.created_at).toLocaleDateString()}</p>
              </Article>
            </div>
          </form>
        </Content>
      </AppContainer>
    )

  return (
    <AppContainer>
      <Content>
        <div>
          <h3>
            <i className="bi bi-person-fill" /> Your Info
          </h3>
          <span onClick={() => setIsEditing(true)}>
            Edit <i className="bi bi-pencil-square" />
          </span>
        </div>

        <div>
          <Article>
            <p>Name</p>
            <p>{requestInfo.data.name}</p>
          </Article>

          <Article>
            <p>Email</p>
            <p>{requestInfo.data.email}</p>
          </Article>

          <Article>
            <p>Desde</p>{" "}
            <p>{new Date(requestInfo.data.created_at).toLocaleDateString()}</p>
          </Article>
        </div>
      </Content>
    </AppContainer>
  );
};

export default Account;
