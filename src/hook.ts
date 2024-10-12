import {useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from './redux/store';

// Для коректного визначення типів у всіх подіях 
export const UseAppDispatch = () => useDispatch<AppDispatch>(); 
// для відстеження всіх подій і структури у додатку
export const UseAppSelector : TypedUseSelectorHook<RootState> = useSelector;