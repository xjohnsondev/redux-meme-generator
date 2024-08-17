
const INITIAL_STATE = { img: null, topText: null, bottomText: null, memeBank: [] };

function memeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "SET_IMAGE":
            return { ...state, img: action.payload }
        case "SET_TOP_TEXT":
            return { ...state, topText: action.payload }
        case "SET_BOTTOM_TEXT":
            return { ...state, bottomText: action.payload }
        case "ADD_MEME":
            const newMeme = {
                img: state.img,
                topText: state.topText,
                bottomText: state.bottomText,
            };
            return {
                ...state,
                memeBank: [...state.memeBank, newMeme],
                img: null,
                topText: null,
                bottomText: null
            }; 
        case "DELETE_MEME":
            return { ...state, memeBank: state.memeBank.filter(meme => meme.id !== action.payload) 
            };
        default:
            return state
    }
}

export default memeReducer;
