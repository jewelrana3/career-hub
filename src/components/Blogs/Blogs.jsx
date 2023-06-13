

const Blogs = () => {
    return (
        <div className="mb-8">
            <h2 className="text-center text-3xl mt-6">Blogs</h2>
            <div className="border border-indigo-600 mt-4 p-2">
                <h2 className="text-3xl mb-4 font-semibold">Context API</h2>
                <p>Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components. A diagram illustrating how Context API works</p>
            </div>
            <div className="border border-indigo-600 mt-4 p-2">
                <h2 className="text-3xl mb-4 font-semibold">Custom Hooks</h2>
                <p>Custom Hooks are a mechanism to reuse stateful logic (such as setting up a subscription and remembering the current value), but every time you use a custom Hook, all state and effects inside of it are fully isolated</p>
            </div>
            <div className="border border-indigo-600 mt-4 p-2">
                <h2 className="text-3xl mb-4 font-semibold">What is useref?</h2>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
            </div>
            <div className="border border-indigo-600 mt-4 p-2">
                <h2 className="text-3xl mb-4 font-semibold">What is UseMemo?</h2>
                <p>he useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running. In this example</p>
            </div>
        </div>
    );
};

export default Blogs;