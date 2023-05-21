import React from 'react';

function ExplorerSidebar({}) {
    return (
        <div>
            <p className={'side-bar-dots'}>. . .</p>
            <input
                placeholder={'search ...'}
                className={'form-control explorer-search-field'}/>

            <div className={'side-bar-filter-container'}>
                <div className={'side-bar-type-heading-container'}>
                    <div className={'side-bar-type-heading-sideline'}/>
                    <p className={'side-bar-type-heading'}>Type</p>
                    <div className={'side-bar-type-heading-sideline'}/>
                </div>

                <div className={'side-bar-filter-type-container'}>
                    <p>Background</p>
                    <p>Base</p>
                    <p>Clothing</p>
                    <p>Mouth</p>
                    <p>Eyes</p>
                    <p>Head</p>
                    <p>Ears</p>
                </div>
            </div>
        </div>
    );
}

export default ExplorerSidebar;