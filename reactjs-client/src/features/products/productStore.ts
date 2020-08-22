import { createSlice } from '@reduxjs/toolkit'
import { Dispatch } from 'redux';
import { IProduct, IProductCreate, IProductUpdate, IProductStoreState } from "./models";
import { HttpHelpers, ApiConstant } from '../../helpers';

export const defaultCreateState: IProductStoreState = {
    errorMessage: '',
    isBusy: false,
    products: []
}

const slice = createSlice({
    name: 'productStore',
    initialState: defaultCreateState,
    reducers: {
        onError: (state, action) => {
            return {
                ...state,
                isBusy: false,
                errorMessage: action.payload.data
            }
        },

        changeBusyState: (state, action) => {
            return {
                ...state,
                errorMessage: '',
                isBusy: action.payload.data
            }
        },

        onGetProductList: (state, action) => {
            return {
                ...state,
                errorMessage: '',
                isBusy: false,
                products: action.payload.data
            }
        }
    },
});

export default slice.reducer;

export const getProductList = () => async (dispatch: Dispatch) => {
    try {
        dispatch(slice.actions.changeBusyState({ data: true }));
        const response = await HttpHelpers.get<IProduct[]>(ApiConstant.product);
        dispatch(slice.actions.onGetProductList({ data: response }));
        dispatch(slice.actions.changeBusyState({ data: false }));
    } catch (error) {
        dispatch(slice.actions.onError({ data: error.message }));
    }
}

export const createProduct = (productCreateModel: IProductCreate) => async (dispatch: Dispatch) => {
    try {
        dispatch(slice.actions.changeBusyState({ data: true }));
        await HttpHelpers.post<any>(ApiConstant.product, productCreateModel);
        dispatch(slice.actions.changeBusyState({ data: false }));
    } catch (error) {
        dispatch(slice.actions.onError({ data: error.message }));
    }
}

export const updateProduct = (productid: string, productUpdateModel: IProductUpdate) => async (dispatch: Dispatch) => {
    try {
        dispatch(slice.actions.changeBusyState({ data: true }));

        productUpdateModel.price = +productUpdateModel.price;
        productUpdateModel.quantity = +productUpdateModel.quantity;

        await HttpHelpers.put<any>(ApiConstant.product, productid, productUpdateModel);
        dispatch(slice.actions.changeBusyState({ data: false }));
    } catch (error) {
        dispatch(slice.actions.onError({ data: error.message }));
    }
}

export const deleteProduct = (productid: string) => async (dispatch: Dispatch) => {
    try {
        dispatch(slice.actions.changeBusyState({ data: true }));
        await HttpHelpers.delete<any>(ApiConstant.product, productid);
        dispatch(slice.actions.changeBusyState({ data: false }));
    } catch (error) {
        dispatch(slice.actions.onError({ data: error.message }));
    }
}