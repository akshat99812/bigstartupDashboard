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
