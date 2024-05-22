import React, { useEffect, useState ,} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as firebase from 'firebase';
import { addItem, imageSet } from '../actions/ItemsAction';


export default function Home() {
    const dispatch = useDispatch()

    const [itemName, setitemName] = useState("");
    const [shortName, setShortName] = useState("");
    const [customerPassword, setCustomerPassword] = useState("");
    const [activePlayer, setActivePlayer] = useState("playerOne");

    
    const [state, setState] = useState({
        setImage:""
      });

  const itemsState = useSelector((state) => state.items);
 

  useEffect(() => {
    try {
      setState ((prevState) => ({
        ...prevState,
        setImage: itemsState.setImage,
      }));
    } catch (e) {
      console.log(e);
    }
  }, [itemsState]);

   const onSetImage = (value) => {
        dispatch(imageSet(value))
    }

      const submit = (e) => {
        e.preventDefault();
        dispatch(addItem(itemName, activePlayer, state.setImage,shortName))
        setitemName("");
        setShortName("");
        setActivePlayer("")
        setState({...state, setImage:""})
    };

  return (
    <div className="App__form" style={{  justifyContent:"center", alignItems:'center', marginTop:"20%"}}>
        <h3>Add Game Items</h3>
        <input
            type="text"
            placeholder="Name"
            value={itemName}
            onChange={(e) => setitemName(e.target.value)}
        />
         <input
            type="text"
            placeholder="Short Name"
            value={shortName}
            onChange={(e) => setShortName(e.target.value)}
        />

        <button onClick={ () => setActivePlayer('playerOne')}  style={{ backgroundColor:activePlayer === "playerOne" ? "green" : "gray", color: "whitesmoke", }}>Player 1</button>
        <button  onClick={ () => setActivePlayer('playerTwo')} style={{ backgroundColor: activePlayer === "playerTwo" ? "green" : "gray", color: "whitesmoke", marginRight:"20px"}}>Player 2</button>
        
        <input
        type={'file'}
        onChange={ (e) => onSetImage(e.target.files[0]) }
        name={'AddImage'}
        accept={ "image/*" }
    />
    <div style={{  marginTop:"20px"}}></div>
        <button onClick={submit}>Submit</button>
    </div>
  )
}
