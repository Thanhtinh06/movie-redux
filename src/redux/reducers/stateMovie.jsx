import dataSeat from "./../../assets/json/danhSachGhe.json";

const stateMovie = {
  listSeat: dataSeat,
  user: {
    name: "",
    numberSeats: 0,
  },
  listTicket: [
    {
      name: "Thanh Tinh",
      numberSeats: 3,
      seats: ["A11", "A12"],
      price: 75000,
      total: 150000,
    },
  ],
  chooseSeats: [],
  startOrder: false,
};

export const reducerMovie = (state = stateMovie, action) => {
  const confirm = () => {
    let listChooseSeat = [...state.chooseSeats];
    let updateListTicket = [...state.listTicket];
    let seats = listChooseSeat.map((seat) => {
      return seat.soGhe;
    });
    let total = listChooseSeat.reduce((total, seat) => {
      return (total += seat.gia);
    }, 0);
    if ((state.user.name !== "") & (state.user.numberSeats !== "")) {
      let ticketNew = {
        name: state.user.name,
        numberSeats: state.user.numberSeats,
        seats: seats,
        price: 75000,
        total: total,
      };
      updateListTicket.push(ticketNew);
    }
    return updateListTicket;
  };
  const remove = (ticketRemove) => {
    let listTicketNew = [...state.listTicket];
    let index = listTicketNew.findIndex((ticket) => ticket === ticketRemove);
    if (index !== -1) {
      listTicketNew.splice(index, 1);
    }
    return listTicketNew;
  };
  switch (action.type) {
    case "TAKE_INFOR":
      let updateUser = { ...state.user };
      updateUser = action.user;
      return { ...state, user: updateUser, startOrder: true };

    case "CHOOSE_SEAT":
      let updateChooseSeats = [...state.chooseSeats];
      let index = updateChooseSeats.findIndex(
        (seat) => seat === action.value
      );
      if (
        updateChooseSeats.length < state.user.numberSeats &&
        state.user.numberSeats !== 0 && index === -1
      ) {
          updateChooseSeats.push(action.value);
      } else if (index !== -1){
        updateChooseSeats.splice(index,1);
      } else {
        state.startOrder = false;
      }
      return {
        ...state,
        chooseSeats: updateChooseSeats,
        startOrder: state.startOrder,
      };
    case "CONFIRM_SELECTION":
      let updateListTicket = [...state.listTicket];
      if(state.chooseSeats.length.toString() === state.user.numberSeats){
        updateListTicket = confirm();
      }
      return {
        ...state,
        listTicket: updateListTicket,
      }
      
    case "REMOVE_TICKET":
      let newListTicket = remove(action.ticket);
      return {
        ...state,
        listTicket: newListTicket,
      };

    default:
      return { ...state };
  }
};
