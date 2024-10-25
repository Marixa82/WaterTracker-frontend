import {useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from '../redux/store';

// Для коректного визначення типів у всіх подіях 
export const useAppDispatch = () => useDispatch<AppDispatch>(); 
// для відстеження всіх подій і структури у додатку
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;

