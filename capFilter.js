// UserProfile.js
import React, { useState } from "react";
import './barcodecss.css'; 
import LogoButton from './LogoButton'; // Import the LogoButton component



import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";

function BopFilter(props) {
  const {
    plant,
    technology,
    mainValving,
    rod,
    pt,
    ga,
    plt_txt,
    pg_txt,
    ml,
    pl,
    filterPlantCallback,
    filterTechnologyCallback,
    filterMainValvingCallback,
    filterRodCallback,
    filterPTCallback,
    filterGlobalAccountCallback,
    filterPlatformTextCallback,
    filterProgramTextCallback,
    filterMountingLocationCallback,
    filterProgramClassificationCallback,
  } = props;

  const [selectedPlant, setSelectedPlant] = useState("");
  const [selectedTechnology, setSelectedTechnology] = useState("");
  const [selectedMainValving, setSelectedMainValving] = useState("");
  const [selectedRod, setSelectedRod] = useState("");
  const [selectedPT, setSelectedPT] = useState("");
  const [selectedGlobalAccount, setSelectedGlobalAccount] = useState([]);
  const [selectedPlatformText, setSelectedPlatformText] = useState([]);
  const [selectedProgramText, setSelectedProgramText] = useState([]);
  const [selectedMountingLocation, setSelectedMountingLocation] = useState([]);
  const [selectedProgramClassification, setSelectedProgramClassification] = useState([]);

  const plantOptions = plant.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterPlantCallback({ val });
        setSelectedPlant(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const technologyOptions = technology.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterTechnologyCallback({ val });
        setSelectedTechnology(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const mainValvingOptions = mainValving.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterMainValvingCallback({ val });
        setSelectedMainValving(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const rodOptions = rod.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterRodCallback({ val });
        setSelectedRod(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const ptOptions = pt.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterPTCallback({ val });
        setSelectedPT(val);
      }}
    >
      {val}

    </DropdownItem>
  ));

  const gaOptions = ga.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterGlobalAccountCallback({ val });
        setSelectedGlobalAccount(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const PlatTextOptions = plt_txt.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterPlatformTextCallback({ val });
        setSelectedPlatformText(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const ProgTextOptions = pg_txt.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterProgramTextCallback({ val });
        setSelectedProgramText(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const MLOptions = ml.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterMountingLocationCallback({val });
        setSelectedMountingLocation(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  const PLOptions = pl.map((val) => (
    <DropdownItem
      key={val}
      href="#pablo"
      onClick={(e) => {
        e.preventDefault();
        filterProgramClassificationCallback({ val });
        setSelectedProgramClassification(val);
      }}
    >
      {val}
    </DropdownItem>
  ));

  return (
    // <div className="MyDropdown">
      <>
      <div className="MyDropdown">
         <div>      
          
      <LogoButton to="/admin/BopTemplate" alt="Logo Alt Text" className="your-logo-button" />
    </div>
    <div>      
      <LogoButton to="/admin/salesforce" alt="Logo Alt Text" className="your-logo-button" />
    </div>
    <div>      
      <LogoButton to="/admin/CapacityPlanning" alt="Logo Alt Text" className="your-logo-button" />
    </div>
    <div>      
      <LogoButton to="/admin/Cap" alt="Logo Alt Text" className="your-logo-button" />
    </div>
    
    </div>
    
    <div className="dropdown1">
      <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button"className="Plant">
            Plant
          </DropdownToggle>
          <DropdownMenu>{plantOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedPlant} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="Tech">
            Technology
          </DropdownToggle>
          <DropdownMenu>{technologyOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedTechnology} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="MV">
            Main Valving
          </DropdownToggle>
          <DropdownMenu>{mainValvingOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedMainValving} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="Rod">
            Rod
          </DropdownToggle>
          <DropdownMenu>{rodOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedRod} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="PT">
            PT
          </DropdownToggle>
          <DropdownMenu>{ptOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedPT} readOnly />

        </div>


        <div className="dropdown2">
        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="GA">
          Global Account

          </DropdownToggle>
          <DropdownMenu>{gaOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedGlobalAccount} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="PlatTxt">
          Platform_txt
          </DropdownToggle>
          <DropdownMenu>{PlatTextOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedPlatformText} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="Pgtxt">
          Program_txt
          </DropdownToggle>
          <DropdownMenu>{ProgTextOptions}</DropdownMenu>
        </UncontrolledDropdown>
        <input type="text" className="customTextBox" value={selectedProgramText} readOnly />

        <UncontrolledDropdown>
          <DropdownToggle caret color="secondary" type="button" className="ML">
          Mounting Location
          </DropdownToggle>
          <DropdownMenu>{MLOptions}</DropdownMenu>
        </UncontrolledDropdown> 
        <input type="text" className="customTextBox" value={selectedMountingLocation} readOnly />
        </div>
        
     </>
     
  );
}



export default BopFilter;

