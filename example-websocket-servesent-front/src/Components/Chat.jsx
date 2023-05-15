import { idUser } from '../Config/idUser.config';


export function Chat({message, idUserSend}) {

  return(
    <li className={idUserSend === idUser ? "message right appeared" : "message left appeared" }>
      <div className="avatar"> 
      </div>
      <div className="text_wrapper">
        <div className="text">{message}</div>
      </div>
    </li>
  )
}