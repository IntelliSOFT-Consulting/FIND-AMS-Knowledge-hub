import {KHInput} from "../components/fields/KHInput.jsx";
import {KHCheckbox} from "../components/fields/KHCheckbox.jsx";
import {KHPrimaryButton} from "../components/cta/KHPrimaryButton.jsx";

export const Login = () => {
    return (
        <div className="py-10 px-4 md:px-10 flex flex-col justify-center min-h-screen gap-8 max-w-4xl mx-auto">
            <p className="text-center text-info text-2xl">AMS DIGITAL HUB</p>
            <div
                className="shadow-lg rounded-lg flex flex-col py-4 md:py-8 px-4 md:px-12 self-center w-full md:w-7/12 border-[1px] gap-4 md:gap-8">
                <p className="text-center text-info font-semibold">LOG IN</p>
                <form className="flex flex-col gap-6 w-full">
                    <KHInput placeholder="Enter username"/>
                    <KHInput type="password" placeholder="Enter password"/>
                    <KHCheckbox label="Login using two factor authentication" name="2fa"/>
                    <KHPrimaryButton>Sign in</KHPrimaryButton>
                </form>
            </div>

            <img
                className="w-full lg:w-8/12 mx-auto"
                src="/imgs/footer.png"
                alt=""/>
        </div>
    )
}