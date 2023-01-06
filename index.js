import React, {useState, useEffect, useRef} from 'react';
import './dropdown.css';

/**
 * Arrow down icon.
 *
 * @returns {*}
 * @constructor
 */
const IconArrowDown = () => {
    return (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
             fill="#000000" stroke="#000000" strokeWidth="0">
            <g id="SVGRepoEditor" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="SVGRepoEditor" transform="translate(-288.000000, 0.000000)">
                    <g id="SVGRepoEditor" transform="translate(288.000000, 0.000000)">
                        <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="SVGRepoEditor" fillRule="nonzero"></path>
                        <path
                            d="M12.7071,15.7072 C12.3166,16.0977 11.6834,16.0977 11.2929,15.7072 L5.63604,10.0503 C5.24551,9.65982 5.24551,9.02666 5.63604,8.63613 C6.02656,8.24561 6.65973,8.24561 7.05025,8.63613 L12,13.5859 L16.9497,8.63613 C17.3403,8.24561 17.9734,8.24561 18.364,8.63613 C18.7545,9.02666 18.7545,9.65982 18.364,10.0503 L12.7071,15.7072 Z"
                            id="SVGRepoEditor" fill="#000"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

/**
 * Arrow up icon.
 *
 * @returns {*}
 * @constructor
 */
const IconArrowUp = () => {
    return (
        <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
             fill="#000000" stroke="#000000" strokeWidth="0">
            <g id="SVGRepoEditor" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="SVGRepoEditor" transform="translate(-432.000000, 0.000000)">
                    <g id="SVGRepoEditor" transform="translate(432.000000, 0.000000)">
                        <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="SVGRepoEditor" fillRule="nonzero"></path>
                        <path
                            d="M11.2929,8.2928 C11.6834,7.90228 12.3166,7.90228 12.7071,8.2928 L18.364,13.9497 C18.7545,14.3402 18.7545,14.9733 18.364,15.3639 C17.9734,15.7544 17.3403,15.7544 16.9497,15.3639 L12,10.4141 L7.05025,15.3639 C6.65973,15.7544 6.02656,15.7544 5.63604,15.3639 C5.24551,14.9733 5.24551,14.3402 5.63604,13.9497 L11.2929,8.2928 Z"
                            id="SVGRepoEditor" fill="#000"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
};

/**
 * Dropdown component.
 *
 * @param placeHolder - Dropdown display on initial load.
 * @param options - 'key-value' array of selectable options.
 * @param isSearchable - Show search input to type in required values.
 * @param persistKey - Update component state with key of the 'key-value' pair.
 * @param parentElementStateSetter - Update state of the parent component.
 * @param arrowUp - Customised up-arrow passed in as a React component.
 * @param arrowDown - Customised down-arrow passed in as a React component.
 * @returns {*}
 * @constructor
 */
const Dropdown = ({
                      placeHolder, options, isSearchable, persistKey, parentElementStateSetter,
                      arrowUp = <IconArrowUp/>, arrowDown = <IconArrowDown/>
                  }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const searchRef = useRef();
    const inputRef = useRef();

    /**
     * Side effect to update the state of the parent component.
     * Can be either key or value of the key-value pair.
     */
    useEffect(() => {
        parentElementStateSetter(persistKey ? selectedValue.key : selectedValue.value);
    }, [parentElementStateSetter, selectedValue, persistKey]);

    /**
     * Side effect to set up a window event listener for the dropdown menu.
     * When an area outside of the dropdown menu is clicked, the menu will close.
     */
    useEffect(() => {
            const handler = (event) => {
                if (inputRef.current && !inputRef.current.contains(event.target)) {
                    setShowMenu(false)
                }
            };
            window.addEventListener('click', handler);
            return () => {
                window.removeEventListener('click', handler);
            }
        }
    );

    /**
     * Side effect to auto focus the cursor to the search input.
     */
    useEffect(() => {
        setSearchValue('');
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    /**
     * Hide or show dropdown menu on clicks.
     */
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    /**
     * Set the input to display either selected option or the placeholder.
     *
     * @returns {*}
     */
    const showSelectedOption = () => {
        if (selectedValue) {
            if (persistKey) {
                return `${selectedValue.key} | ${selectedValue.value}`;
            }
            return selectedValue.value;
        }
        return placeHolder;
    };

    /**
     * Check which item is selected for highlighting in the dropdown menu.
     *
     * @param option
     * @returns {boolean}
     */
    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    };

    /**
     * Handle search value state.
     *
     * @param event
     */
    const onSearch = (event) => {
        setSearchValue(event.target.value);
    };

    /**
     * Return search options.
     *
     * @returns {*}
     */
    const showOptions = () => {
        if (!searchValue) {
            return options;
        }
        return options.filter((option) => {
            return option.value.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0 ||
                option.key.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0; //or === 0 to match from the beginning of search string
        });
    };

    return (
        <div className='dropdown'>
            <div ref={inputRef}
                 onClick={handleInputClick}
                 className={!showMenu ? 'dropdown-input' : 'dropdown-input-active'}
            >
                <div className='dropdown-selected-value'>
                    {showSelectedOption()}
                </div>
                <div className='dropdown-icons'>
                    <div className='dropdown-icons-arrow'>
                        {
                            !showMenu ? arrowDown : arrowUp
                        }
                    </div>
                </div>
            </div>
            {showMenu && (
                <div className='dropdown-menu'>
                    {
                        isSearchable && (
                            <div className='dropdown-search'>
                                <input onChange={onSearch}
                                       value={searchValue}
                                       ref={searchRef}
                                />
                            </div>
                        )
                    }
                    {
                        showOptions().map((option) => (
                            <div onClick={() => setSelectedValue(option)}
                                 key={option.key}
                                 className={`dropdown-item ${isSelected(option) && 'selected'}`}
                            >
                                {persistKey ? `${option.key} | ${option.value}` : `${option.value}`}
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Dropdown;