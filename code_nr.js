import React, { useState, useEffect } from "react";
import axios from "axios";
import "./barcodecss.css";
import CapFilter from "./CapFilter.js";
// import React from 'react';
import LogoButton from './LogoButton'; // Import the LogoButton component


import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Input,
  Button,
  UncontrolledTooltip,
} from "reactstrap";

// rest of the imports

function Tables() {
  const initialSelVals={"sel1GlobalAcc" : "", "sel1Platform" : "", "sel1Program": "", "sel1Mounting": ""}
  const [selVals, setSelVals] = useState(initialSelVals);
  const [tbdata, setTbdata] = useState([]);
  const [basedata, setBasedata] = useState([]);
  const [tbdata2, setTbdata2] = useState([]);
  const [basedata2, setBasedata2] = useState([]);
  const [err, setErr] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDone2, setIsDone2] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [unqPlant, setUnqPlant] = useState([]);
  const [unqTechnology, setUnqTechnology] = useState([]);
  const [selectedPlant, setSelectedPlant] = useState([]);
  const [selectedTechnology, setSelectedTechnology] = useState([]);
  const [unqMainValving, setUnqMainValving] = useState([]);
  const [unqRod, setUnqRod] = useState([]);
  const [unqPT, setUnqPT] = useState([]);
  const [selectedMainValving, setSelectedMainValving] = useState([]);
  const [selectedRod, setSelectedRod] = useState([]);
  const [selectedPT, setSelectedPT] = useState([]);
  const [selectedGlobalAccount, setSelectedGlobalAccount] = useState([]);
  const [selectedPlatformText, setSelectedPlatformText] = useState([]);
  const [selectedProgramText, setSelectedProgramText] = useState([]);
  const [selectedMountingLocation, setSelectedMountingLocation] = useState([]);
  const [selectedProgramClassification, setSelectedProgramClassification] = useState([]);
  const [unqGA, setUnqGlobalAccount] = useState([]);
  
  const [unqPlatText, setUnqPlatformText] = useState([]);

  const [unqProgText, setUnqProgramText] = useState([]);
  const [unqML, setUnqMountingLocation] = useState([]);


  const [unqPCL, setUnqProgramClassification] = useState([]);
  const [unqTechnology2, setUnqTechnology2] = useState([]);
  const [selectedTechnology2, setSelectedTechnology2] = useState([]);
  const [selectedMainValving2, setSelectedMainValving2] = useState([]);
  const [selectedRod2, setSelectedRod2] = useState([]);
  const [selectedPT2, setSelectedPT2] = useState([]);
  const [unqMainValving2, setUnqMainValving2] = useState([]);
  const [unqRod2, setUnqRod2] = useState([]);
  const [unqPT2, setUnqPT2] = useState([]);

  // const [selectedPCL, setSelectedPCL] = useState([]);
  // const [stationCheck1, setStationCheck1] = useState(true);
  const [selectedProcesses, setSelectedProcesses] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState({
    plant: "",
    technology: "",
    mainValving: "",
    rod: "",
    pt: "",
  });
  // const [selectedFilterSF, setSelectedFilterSF] = useState({
  //   GA: "",
  //   technology: "",
  //   mainValving: "",
  //   rod: "",
  //   pt: "",
  // });
  

  const handleProcessCheckboxChange = (process) => {
    setSelectedProcesses((prevSelected) =>
      prevSelected.includes(process)
        ? prevSelected.filter((p) => p !== process)
        : [...prevSelected, process]
    );
  };

  const handleCheckboxChange = (index) => {
    setTbdata((prevData) => {
      const newData = [...prevData];
      newData[index].stationCheck1 = !newData[index].stationCheck1;

      // Set CT to null only for the row where the checkbox is checked
      if (newData[index].stationCheck1) {
        // Store the original CT value before setting it to null
        newData[index].originalCT = newData[index].CT;
        newData[index].CT = null;
      } else {
        // Retrieve the original CT value when the checkbox is unchecked
        newData[index].CT = newData[index].originalCT;
        // Clear the stored original CT value
        delete newData[index].originalCT;
      }

      return newData;
    });
  };

  const filterPlantCallback = (selPlant) => {
    console.log(selPlant.val);
    setSelectedPlant(selPlant.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      plant: selPlant.val,
    }));
  };

  const filterMainValvingCallback = (selMainValving) => {
    console.log(selMainValving.val);
    setSelectedMainValving2(selMainValving.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      mainValving: selMainValving.val,
    }));
  };

  const filterRodCallback = (selRod) => {
    console.log(selRod.val);
    setSelectedRod2(selRod.val);
    setSelectedFilter((prevFilters) => ({ ...prevFilters, rod: selRod.val }));
  };

  const filterPTCallback = (selPT) => {
    console.log(selPT.val);
    setSelectedPT2(selPT.val);
    setSelectedFilter((prevFilters) => ({ ...prevFilters, pt: selPT.val }));
  };

  const filterTechnologyCallback = (selTechnology) => {
    console.log(selTechnology.val);
    setSelectedTechnology2(selTechnology.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      technology: selTechnology.val,
    }));
  };

  const filterGlobalAccountCallback = (selGlobalAccount) => {
    setSelectedGlobalAccount(selGlobalAccount.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      globalAccount: selGlobalAccount.val,
    }));
  };

  const filterPlatformTextCallback = (selPlatformText) => {
    setSelectedPlatformText(selPlatformText.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      platformText: selPlatformText.val,
    }));
  };

  const filterProgramTextCallback = (selProgramText) => {
    setSelectedProgramText(selProgramText.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      programText: selProgramText.val,
    }));
  };

  const filterMountingLocationCallback = (selMountingLocation) => {
    setSelectedMountingLocation(selMountingLocation.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      mountingLocation: selMountingLocation.val,
    }));
  };

  const filterProgramClassificationCallback = (selProgramClassification) => {
    setSelectedProgramClassification(selProgramClassification.val);
    setSelectedFilter((prevFilters) => ({
      ...prevFilters,
      programClassification: selProgramClassification.val,
    }));
  };

  useEffect(() => {
    let regexGlobalAccount = new RegExp([selectedGlobalAccount], "i")
    let regexPlatformText = new RegExp([selectedPlatformText], "i");
    let regexProgramText = new RegExp([selectedProgramText], "i")
    let regexProgramClassification = new RegExp([selectedProgramClassification], "i");
    let regexMountingLocation = new RegExp([selectedMountingLocation], "i");
    let regexMainValving2 = new RegExp([selectedMainValving2], "i");
    let regexRod2 = new RegExp([selectedRod2], "i");
    let regexPT2 = new RegExp([selectedPT2], "i");
    let regexTechnology2 = new RegExp([selectedTechnology2], "i");
    let regexProcesses2 = new RegExp(selectedProcesses.join("|"), "i");
  
    setTbdata2(
      basedata.filter((val) => {
        return (
          regexGlobalAccount.test(val.GlobalAccount) &&
          regexPlatformText.test(val.PlatformText)&&
          regexProgramText.test(val.ProgramText)&&
          regexProgramClassification.test(val.ProgramClassification)&&
          regexMountingLocation.test(val.MountingLocation)&&
          regexMainValving2.test(val.MainValving) &&
          regexRod2.test(val.Rod) &&
          regexPT2.test(val.PT) &&
          regexTechnology2.test(val.Technology)&&
          regexProcesses2.test(val.Phase)
          
          
  
  
        );
      })
    );
  }, [
    selectedGlobalAccount,
    selectedPlatformText,
    selectedProgramText,
    selectedProgramClassification,
    selectedMountingLocation,
    selectedMainValving2,
    selectedRod2,
    selectedPT2,
    selectedTechnology2,
    [selectedProcesses, basedata]
  ]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/SaleforceApi/SalesforceData/")
      .then((response) => {
        setBasedata2(response.data);
        setTbdata2(response.data);
        setLoading2(false);
        setIsDone2(true);

        let uniqueGlobalAccounts = new Set(response.data.map((val) => val.GlobalAccount));
        let uniquePlatformTexts = new Set(response.data.map((val) => val.PlatformText));
        let uniqueProgramTexts = new Set(response.data.map((val) => val.ProgramText));
        let uniqueMountingLocations = new Set(response.data.map((val) => val.MountingLocation));
        let uniqueProgramClassifications = new Set(response.data.map((val) => val.ProgramClassification));
        let uniqueMainValving2 = new Set(response.data.map((val) => val.MainValving));
        let uniqueRod2 = new Set(response.data.map((val) => val.Rod));
        let uniquePT2 = new Set(response.data.map((val) => val.PT));
        let uniqueTechnologies2 = new Set(response.data.map((val) => val.Technology)
        );

        // setUnqPlant(Array.from(uniquePlants));
        setUnqMainValving2(Array.from(uniqueMainValving2));
        setUnqRod2(Array.from(uniqueRod2));
        setUnqPT2(Array.from(uniquePT2));
        setUnqTechnology2(Array.from(uniqueTechnologies2));

        setUnqGlobalAccount(Array.from(uniqueGlobalAccounts));
        setUnqPlatformText(Array.from(uniquePlatformTexts));
        setUnqProgramText(Array.from(uniqueProgramTexts));
        setUnqMountingLocation(Array.from(uniqueMountingLocations));
        setUnqProgramClassification(Array.from(uniqueProgramClassifications));
  

        console.log(response.data);
      })
      .catch((error) => {
        setErr(error);
        console.log(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => { 
    datafilter=basedata2
    for (const [key, value] of Object.entries(selVals)) {
    if (key==="sel1GlobalAcc" && (value!="" || value!=null)){
      datafilter=datafilter.filter((val) => {
        return (
          val.globalAccount===value
        );
      });
    }
    else if (key==="sel1Platform" && (value!="" || value!=null)){
      datafilter=datafilter.filter((val) => {
        return (
          val.platformText===value
        );
      });
    }
    else if (key==="sel1Program" && (value!="" || value!=null)){
      datafilter=datafilter.filter((val) => {
        return (
          val.programText===value
        );
      });
    }
    else if (key==="sel1Mounting" && (value!="" || value!=null)){
      datafilter=datafilter.filter((val) => {
        return (
          val.mountingLocation===value
        );
      });
    }
  }
    setTbdata2(datafilter)
  }, [selVals]);




  useEffect(() => {
    let regexPlant = new RegExp([selectedPlant], "i");
    let regexMainValving = new RegExp([selectedMainValving2], "i");
    let regexRod = new RegExp([selectedRod2], "i");
    let regexPT = new RegExp([selectedPT2], "i");
    let regexTechnology = new RegExp([selectedTechnology2], "i");
    let regexProcesses = new RegExp(selectedProcesses.join("|"), "i");
   



    setTbdata(
      basedata.filter((val) => {
        return (
          regexPlant.test(val.Plant) &&
          regexMainValving.test(val.MainValving) &&
          regexRod.test(val.Rod) &&
          regexPT.test(val.PT) &&
          regexTechnology.test(val.Technology)&&
          regexProcesses.test(val.Phase)
          // regexGlobalAccount.test(val.GlobalAccount)&&
          // regexPlatformText.test(val.PlatformText)&&
          // regexProgramText.test(val.ProgramText)&&
          // regexProgramClassification.test(val.ProgramClassification)&&
          // regexMountingLocation.test(val.MountingLocation)&&
          // regexProcesses.test(val)
          


        );
      })
    );
  }, [
    selectedPlant,
    selectedMainValving2,
    selectedRod2,
    selectedPT2,
    selectedTechnology2,
    [selectedProcesses, basedata]
  ]);

  
 
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/capApi/Capacity/")
      .then((response) => {
        setBasedata(response.data);
        setTbdata(response.data);
        setLoading(false);
        setIsDone(true);

        let uniquePlants = new Set(response.data.map((val) => val.Plant));
        let uniqueMainValving2 = new Set(
          response.data.map((val) => val.MainValving)
        );
        let uniqueRod2 = new Set(response.data.map((val) => val.Rod));
        let uniquePT2 = new Set(response.data.map((val) => val.PT));
        let uniqueTechnologies2 = new Set(response.data.map((val) => val.Technology)
        );

        setUnqPlant(Array.from(uniquePlants));
        setUnqMainValving(Array.from(uniqueMainValving2));
        setUnqRod(Array.from(uniqueRod2));
        setUnqPT(Array.from(uniquePT2));
        setUnqTechnology(Array.from(uniqueTechnologies2));

        console.log(response.data);
      })
      .catch((error) => {
        setErr(error);
        console.log(error);
        setLoading(false);
      });
  }, []);

  const showData = () => {
    let sum = 0;
    const reqData = tbdata.map((row, i) => {
      const ctValue = parseInt(row.CT, 10);
      if (!isNaN(ctValue)) {
        sum += ctValue;
      }
      return (
        <tr key={row.EQID + row.Plant + i}>
        <td>{row.id}</td>
        <td>{row.Plant}</td>
        <td>{row.Phase}</td>
        <td>{row.Process}</td>
        <td>{row.Line}</td>
        <td>{row.CostCenter}</td>
        <td>
            <input
              type="checkbox"
              id={`stationCheck${i}`}
              name={`stationCheck${i}`}
              value={`optionChecked${i}`}
              onChange={() => handleCheckboxChange(i)}
              checked={row.stationCheck1 || false}
            />
            <label htmlFor={`stationCheck${i}`}>Option</label>
          </td>
        <td>{row.stationCheck1 ? null : row.CT}</td>
        <td>{row.Capacity}</td>
        <td>{row.WorkCenter}</td>
        <td>{row.Equipment}</td>
        <td>{row.EQID}</td>
        <td>{row.Technology}</td>
        <td>{row.MainValving}</td>
        <td>{row.Rod}</td>
        <td>{row.PT}</td>
        </tr>
      );
    });

    // Add the row for the sum at the end of the column
    reqData.push(
      <tr key="sum">
        <td></td> {/* Empty cell corresponding to the checkbox column */}
        <td></td> {/* Empty cell corresponding to the CT values */}
        <td></td> {/* Empty cell corresponding to the CT values */}
        <td></td> {/* Empty cell corresponding to the CT values */}
        <td></td> {/* Empty cell corresponding to the CT values */}
        <td></td> {/* Empty cell corresponding to the CT values */}
        <td>Sum: {sum}</td> {/* Display the sum at the end of the column */}
        {/* ... (other empty cells corresponding to other columns) */}
      </tr>
    );

    return reqData;
  };

  return (
    <React.Fragment>
      
        <CapFilter
          plant={unqPlant}
          mainValving={unqMainValving2}
          rod={unqRod2}
          pt={unqPT2}
          technology={unqTechnology2}
          ga={unqGA}
          plt_txt={unqPlatText}
          pg_txt={unqProgText}
          ml={unqML}
          pl={unqPCL}

          filterPlantCallback={filterPlantCallback}
          filterMainValvingCallback={filterMainValvingCallback}
          filterRodCallback={filterRodCallback}
          filterPTCallback={filterPTCallback}
          filterTechnologyCallback={filterTechnologyCallback}
          filterGlobalAccountCallback={filterGlobalAccountCallback}
          filterPlatformTextCallback={filterPlatformTextCallback}
          filterProgramTextCallback={filterProgramTextCallback}
          filterMountingLocationCallback={filterMountingLocationCallback}
          filterProgramClassificationCallback={filterProgramClassificationCallback}
        />

<div className="content">
        <div className="Mytable">
          <Row>
            <Col md="3">
              <Card>
           
                {/* <CardHeader>
                  {/* <CardTitle tag="h4">Process Selection</CardTitle> */}
                {/* </CardHeader> */} 
                <CardBody>
                  <Card className="card-tasks">
                    <CardHeader>
                      <h6 className="title d-inline">Process Selection</h6>
                    </CardHeader>
                    <CardBody>
                      <div className="table-full-width table-responsive">
                        <Table>
                          <tbody>
                            <tr>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultValue="" type="checkbox" onChange={() => handleProcessCheckboxChange("Rod Manufacturing")} />
                                    <span className="form-check-sign">
                                      <span className="check" />
                                    </span>
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title text-left">
                                  Rod Manufacturing
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultValue="" type="checkbox" onChange={() => handleProcessCheckboxChange("Rod-Collar Assembly")}/>
                                    <span className="form-check-sign">
                                      <span className="check" />
                                    </span>
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title text-left">
                                Rod-Collar Assembly
                                </p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultValue="" type="checkbox" onChange={() => handleProcessCheckboxChange("Base Assembly")} />
                                    <span className="form-check-sign">
                                      <span className="check" />
                                    </span>
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title text-left">Base Assembly</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultValue="" type="checkbox" onChange={() => handleProcessCheckboxChange("Valve Assembly")}/>
                                    <span className="form-check-sign">
                                      <span className="check" />
                                    </span>
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title text-left">Valve Assembly</p>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <FormGroup check>
                                  <Label check>
                                    <Input defaultValue="" type="checkbox" onChange={() => handleProcessCheckboxChange("Final Assembly")}/>
                                    <span className="form-check-sign">
                                      <span className="check" />
                                    </span>
                                  </Label>
                                </FormGroup>
                              </td>
                              <td>
                                <p className="title text-left">
                                Final Assembly
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </CardBody>
                  </Card>
                </CardBody>
              </Card>
            </Col>
            <Col md="9">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">CapacityPlanning</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                      <th className="text-center">ID</th>
                      <th className="text-center">Plant</th>
                      <th className="text-center">Phase</th>
                      <th className="text-center">Process</th>
                      <th className="text-center">Line</th>
                      <th className="text-center">CostCenter</th>
                      <th className="text-center">Station Check</th>
                      <th className="text-center">CT</th>
                      <th className="text-center">Capacity</th>	
                      <th className="text-center">WorkCenter</th>
                      <th className="text-center">Equipment</th>
                      <th className="text-center">EQID</th>
                      <th className="text-center">Technology</th>
                      <th className="text-center">MainValving</th>
                      <th className="text-center">Rod</th>
                      <th className="text-center">PT</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      {console.log(isDone)}
                      {isDone ? showData() : null}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Tables;
