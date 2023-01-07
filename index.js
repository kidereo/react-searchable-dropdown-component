import React, {useState, useEffect, useRef} from 'react';
import './dropdown.css';
import {IconArrowDown, IconArrowUp} from './svg-icons';

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
export const Dropdown = ({
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
