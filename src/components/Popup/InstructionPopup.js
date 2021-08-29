import React from 'react';
import {Button} from "../index";
import {BiHash, BiSelectMultiple, FaMinus, FaPlay, FaPlus} from "react-icons/all";

const InstructionPopup = (props) => {
    return (<>
        <div>
            <div style={{display: "flex", height: "3rem", alignItems:"center"}}>
                <Button ><FaPlay/></Button>
                <div style={{marginLeft: "1rem"}}>Play/Pause button</div>
            </div>
            <div style={{display: "flex", height: "3rem", alignItems:"center"}}>
                <Button> All <BiSelectMultiple size={20}/></Button>
                <div style={{marginLeft: "1rem"}}>button to select all rhythms</div>
            </div>
            <div style={{display: "flex", height: "3rem", alignItems:"center"}}>
                <Button><FaPlus/></Button>
                <div style={{marginLeft: "1rem"}}>button to add a rhythm</div>
            </div>
            <div style={{display: "flex", height: "3rem", alignItems:"center"}}>
                <Button><FaMinus/></Button>
                <div style={{marginLeft: "1rem"}}>button to delete a rhythm</div>
            </div>
            <div style={{display: "flex", height: "3rem", alignItems:"center"}}>
                <Button><BiHash/></Button>
                <div style={{marginLeft: "1rem"}}>button to select a specific rhythm</div>
            </div>
            <br/>
            On the right the drum is divided:
            <ul>
                <li>On top: <b>display to see the final rhythm</b></li>
                <li>On bottom: <b>pad to characterize your rhythms</b></li>
            </ul>
        </div>
    </>);
}

export default InstructionPopup;