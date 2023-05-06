export const StyledScrollBar = `
    ::-webkit-scrollbar {
        height: 10px;
        position: absolute;
        top: 0
    };
    ::-webkit-scrollbar-button {
        width: 2rem;
    };
    ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 1rem;
    };
    ::-webkit-scrollbar-thumb {
        background: rgba(255, 255, 255, 0.3);
        border-radius: 1rem;
    };
    ::-webkit-scrollbar-thumb:hover {
        background: rgba(255, 255, 255, 0.6);
    };
`