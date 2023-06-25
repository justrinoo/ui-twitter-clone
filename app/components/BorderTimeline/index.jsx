export default function BorderTimeline({ children }) {
    return (
        <div
            className={
                'mr-10 ml-8 w-[500px] py-3 px-4 border-[1px] border-[#2F3336] border-t-0 border-b-[1px] border-l-[1px] border-r-[1px]'
            }
        >
            {children}
        </div>
    );
}
