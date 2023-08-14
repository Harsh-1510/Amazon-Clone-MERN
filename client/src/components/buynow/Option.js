import React, { useContext } from 'react'
import { LoginContext } from '../context/Contextprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Option = ({deletedata,get}) => {

    const { account, setAccount } = useContext(LoginContext);
    // console.log(account);

    // const handleQuantityChange = (id, change) => {
    //     const updatedAccount = account.map(item =>
    //         item.id === id
    //         ? {
    //             ...item,
    //             quantity: Math.max(1, item.quantity + change), // Ensure quantity doesn't go below 1
    //         }
    //         : item
    //     );
    //     setAccount(updatedAccount);
    // };

    const removedata = async (id) => {
        try {
            const res = await fetch(`remove/${id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("error aai remove time pr");
            } else {
                setAccount(data)
                get();
                toast.success("Iteam remove from cart 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log(error);
        }

    }

    // let totalQuantity = 0;
    // let totalAmount = 0;
    // const duplicateItems = {};
    // account.forEach(item => {
    //   if (item.id in duplicateItems) {
    //     duplicateItems[item.id].quantity += item.quantity;
    //     duplicateItems[item.id].amount += item.quantity * item.price; // Assuming each item has a price property
    //   } else {
    //     duplicateItems[item.id] = {
    //       quantity: item.quantity,
    //       amount: item.quantity * item.price,
    //     };
    //   }
    //   totalQuantity += item.quantity;
    //   totalAmount += item.quantity * item.price;
    // });


  return (
    <div className='add_remove_select'>
    <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
    </select>
    {/* {account.map(item => (
        <div key={item.id}>
            <p>{item.name}</p>
            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
        </div>
    ))
    } */}

    <p style={{cursor:"pointer"}} onClick={()=>removedata(deletedata)}>Delete</p>
    <p className='forremovemedia'>Save or Later</p>
    <p className='forremovemedia'>See more like this</p>
    <ToastContainer/>
      
    </div>
  )
}

export default Option
