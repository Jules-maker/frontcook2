
const Icon = ({ name, fill, ...props }) => {
    switch (name) {
        case 'user-stroke':
            return <svg {...props} width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25 25C27.4864 25 29.871 24.0123 31.6291 22.2541C33.3873 20.496 34.375 18.1114 34.375 15.625C34.375 13.1386 33.3873 10.754 31.6291 8.99587C29.871 7.23772 27.4864 6.25 25 6.25C22.5136 6.25 20.129 7.23772 18.3709 8.99587C16.6127 10.754 15.625 13.1386 15.625 15.625C15.625 18.1114 16.6127 20.496 18.3709 22.2541C20.129 24.0123 22.5136 25 25 25ZM25 28.125C21.6848 28.125 18.5054 26.808 16.1612 24.4638C13.817 22.1196 12.5 18.9402 12.5 15.625C12.5 12.3098 13.817 9.13037 16.1612 6.78617C18.5054 4.44196 21.6848 3.125 25 3.125C28.3152 3.125 31.4946 4.44196 33.8388 6.78617C36.183 9.13037 37.5 12.3098 37.5 15.625C37.5 18.9402 36.183 22.1196 33.8388 24.4638C31.4946 26.808 28.3152 28.125 25 28.125ZM40.625 43.75V39.0625C40.625 37.8193 40.1311 36.627 39.2521 35.7479C38.373 34.8689 37.1807 34.375 35.9375 34.375H14.0625C12.8193 34.375 11.627 34.8689 10.7479 35.7479C9.86886 36.627 9.375 37.8193 9.375 39.0625V43.75C9.375 44.1644 9.21038 44.5618 8.91735 44.8549C8.62433 45.1479 8.2269 45.3125 7.8125 45.3125C7.3981 45.3125 7.00067 45.1479 6.70765 44.8549C6.41462 44.5618 6.25 44.1644 6.25 43.75V39.0625C6.25 36.9905 7.0731 35.0034 8.53823 33.5382C10.0034 32.0731 11.9905 31.25 14.0625 31.25H35.9375C38.0095 31.25 39.9966 32.0731 41.4618 33.5382C42.9269 35.0034 43.75 36.9905 43.75 39.0625V43.75C43.75 44.1644 43.5854 44.5618 43.2924 44.8549C42.9993 45.1479 42.6019 45.3125 42.1875 45.3125C41.7731 45.3125 41.3757 45.1479 41.0826 44.8549C40.7896 44.5618 40.625 44.1644 40.625 43.75Z" fill={fill ?? "white"} />
            </svg>
        case 'logout':
            return <svg {...props} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.08333 7.08333H17V4.25H4.25V29.75H17V26.9167H7.08333V7.08333Z" fill={fill ?? "white"} />
                <path d="M29.75 17L24.0833 11.3334V15.5834H12.75V18.4167H24.0833V22.6667L29.75 17Z" fill={fill ?? "white"} />
            </svg>
        default:
            return null
    }
}

export default Icon