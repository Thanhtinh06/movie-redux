import { TAKE_INFOR,CHOOSE_SEAT,CONFIRM_SELECTION, REMOVE_TICKET} from "./type";
export const actTakeInfor = (user) => {
  return {
    type: TAKE_INFOR,
    user,
  };
};

export const actChooseSeat = (seat) => {
  return {
    type: CHOOSE_SEAT,
    seat,
  };
}

export const actComfirmSeletion = () => {
  return {
    type: CONFIRM_SELECTION,
  };
}

export const actRemoveTicket = (ticket) => {
  return {
    type: REMOVE_TICKET,
    ticket
  };
}