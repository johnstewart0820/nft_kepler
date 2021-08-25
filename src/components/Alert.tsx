import React, {FunctionComponent, useEffect} from 'react';
import classes from '../styles/Alert.module.scss';
import {useAlert} from "../hooks/useAlert";

const Alert: FunctionComponent = () => {
    const {alert, hideAlert} = useAlert()
    const cls = [classes.Alert, classes[alert.cls]];

    useEffect(() => {
        if (alert.show) {
            const delay = setTimeout(() => {
                hideAlert()
            }, 5000)
            return () => {
                clearTimeout(delay);
            }
        }
    }, [alert, hideAlert]);

    if (!alert.show) {
        return null;
    }

    return (
        <div className={classes.Wrapper}>
            <div className={cls.join(' ')}>
                <div className={classes.Text}>
                    {alert.text}
                </div>
                <button onClick={hideAlert}/>
            </div>
        </div>
    );
};

export default Alert;
