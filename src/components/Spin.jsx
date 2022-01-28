import "./spin.css";

export const Spin = ({isLoading}) => {
    if (isLoading) return <div className="spinner" />
    return null
}