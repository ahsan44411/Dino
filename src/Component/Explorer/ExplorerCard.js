import React from 'react';

function ExplorerCard({img, name, type, backgroundColor, separatorBackgroundColor}) {
    return (
        <div className={'explorer-card shadow-lg'}>
            <div className={'explorer-card-img-container'}
                 style={{borderBottom: `3px solid ${separatorBackgroundColor}`}}>
                <div className={'explorer-card-inner-img'}>
                    <img src={img} className={'explorer-card-img'}/>
                    <p className={'explorer-card-beware-text'}>Beware the Bears of Dingus Forest OoooOOOooOO!!</p>
                    <p className={'explorer-card-dots'}>...</p>
                </div>
            </div>
            <div className={'explorer-card-body'}>
                <p className={'explorer-card-name'}>{name}</p>
                <div className={'explorer-card-attr-div-container'}>
                    <div className={'explorer-card-attr-div'}>
                        <p className={'explorer-card-attr-heading'}>Type</p>
                        <div className={'separator'}/>
                        <p className={'explorer-card-attr'}>{type}</p>
                    </div>
                    <div className={'explorer-card-attr-div'}>
                        <p className={'explorer-card-attr-heading'}>Rarity</p>
                        <div className={'separator'}/>
                        <p className={'explorer-card-attr'}>369/2500</p>
                    </div>
                </div>

                <p className={'explorer-card-copyright'}>© 2022 Degenerate Labs Incorporated. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default ExplorerCard;