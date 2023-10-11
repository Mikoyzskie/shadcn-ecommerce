import { Modal } from "@/components/ui/modal";
import { UserButton } from "@clerk/nextjs";

const SetupPage = () => {
    return (
        <div>
            {/* <UserButton afterSignOutUrl="/" /> */}
            <Modal title="test" description="test" isOpen onClose={() => { }}>
                Children
            </Modal>
        </div>
    )
}

export default SetupPage;