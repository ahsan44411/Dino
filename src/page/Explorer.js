import React from 'react';
import Navbar from "../Component/Navbar/Navbar";
import ExplorerCard from "../Component/Explorer/ExplorerCard";
import ApeImg from "../Assets/Images/Arrowed.png";
import ApeImg2 from "../Assets/Images/Diamonds R Forever.png";
import ApeImg3 from "../Assets/Images/My Little Angel.png";
import ApeImg4 from "../Assets/Images/Soft Ears.png";
import ExplorerSidebar from "../Component/Explorer/ExplorerSidebar";

function Explorer({}) {
    return (
        <div className="div">
            <Navbar/>

            <div className="p-5">
                <div className="row py-5">
                    <div className="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12 col-12">
                        <ExplorerSidebar/>
                    </div>
                    <div className="col-xl-10 col-lg-10 col-md-12 col-sm-12 col-xs-12 col-12">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 my-2">
                                <ExplorerCard
                                    img={ApeImg}
                                    name={"Arrowed"}
                                    type={"Ears"}
                                    backgroundColor={'#6D9886'}
                                    separatorBackgroundColor={'#0F044C'}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 my-2">
                                <ExplorerCard
                                    img={ApeImg2}
                                    name={"Diamonds R Forever"}
                                    type={"Ears"}
                                    backgroundColor={'#141E61'}
                                    separatorBackgroundColor={'#0F044C'}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 my-2">
                                <ExplorerCard
                                    img={ApeImg3}
                                    name={"My Little Angel"}
                                    type={"Ears"}
                                    backgroundColor={'#F4F9F9'}
                                    separatorBackgroundColor={'#0F044C'}
                                />
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12 col-12 my-2">
                                <ExplorerCard
                                    img={ApeImg4}
                                    name={"Soft Ears"}
                                    type={"Ears"}
                                    backgroundColor={'#334257'}
                                    separatorBackgroundColor={'#0F044C'}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Explorer;