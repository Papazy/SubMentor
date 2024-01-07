import {Redirect, Slot, useRootNavigationState} from 'expo-router'
export default function index(){
    const state = useRootNavigationState();
    if(!state?.key) return;
    return <Redirect href="/signin"/>
}
