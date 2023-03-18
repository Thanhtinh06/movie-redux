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
  statusBtnConfirm : false,
};

export const reducerMovie = (state = stateMovie, action) => {
  const findSeat =  (target) => {
    let listSeatClone = [...state.listSeat]
    for(let row of listSeatClone){
      for(let seat_row of row.danhSachGhe){
        if(seat_row === target){
          let index = row.danhSachGhe.findIndex((seat_row) => seat_row === target);
          row.danhSachGhe[index] = changeStatusSeat(target);
        }
      }
    }
    return listSeatClone
  }
  const changeStatusSeat = (seat) => {
    return {soGhe:seat.soGhe,gia:0,daDat:true}
  }
     
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
      return { ...state, user: updateUser, startOrder: true, statusBtnConfirm: false };

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
      let newListSeat = [...state.listSeat]
      let updateListTicket = [...state.listTicket];
      let resetConfirm = false;
      if(state.chooseSeats.length.toString() === state.user.numberSeats){
        updateListTicket = confirm();
        resetConfirm = true;
        for(let seat of state.chooseSeats){
          newListSeat = findSeat(seat)
        }
      }else{
        alert(`Please select ${state.user.numberSeats} seats`)
      }
      return {
        ...state,
        listTicket: updateListTicket,
        statusBtnConfirm :resetConfirm,
        listSeat : newListSeat,
        chooseSeats : []
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
