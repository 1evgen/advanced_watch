import {useState} from "react";

const SwitcherExample = () =>  {
    }
    return (
        <div>
            <Switcher
                name="my-switcher"
                onChange={onHandleChange}
                checked={switcherState}
            />
        </div>
    )
}