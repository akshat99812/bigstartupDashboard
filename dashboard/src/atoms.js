import { atom } from "recoil";

export const reviewCancelBtnState= atom({
    key:"cancelBtnState",
    default:false
})

export const reviewedPopBtnState = atom({
    key:"reviewedPopBtnState",
    default:false
})

export const isReviewEditing = atom({
    key:"isReviewEditing",
    default:false
})

export const reviewData = atom({
    key:"reviewData",
    default:{}
})

export const render = atom({
    key:"render",
    default:false
})

export const editRPop=atom({
    key:"editRPop",
    default:false
})

export const startupRender=atom({
    key:"startupRender",
    default:false
})

export const startupAddPricePop=atom({
    key:"startupAddPricePop",
    default:false
})

export const startupEditPricePop=atom({
    key:"startupEditPricePop",
    default:false
})

export const upcomingRender=atom({
    key:"upcomingRender",
    default:false
})

export const upcomingUpdate=atom({
    key:"upcomingUpdate",
    default:false
})

