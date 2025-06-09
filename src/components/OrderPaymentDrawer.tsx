import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import Button from "./base/Button";
import { motion } from "framer-motion";
import Icon from "../components/Icon";
import OrderFoodList from "../components/OrderFoodList";
import CostSummary from "../components/CostSummary";
import PaymentMethod from "../components/PaymentMethod";
import Label from "../components/base/Label";
import Input from "./base/Input";
import Select from "./base/Select";

export default function OrderPaymentDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="mt-6">Continue to Payment</Button>
      </Dialog.Trigger>

      {open && (
        <Dialog.Portal forceMount>
          {/* Overlay */}
          <Dialog.Overlay asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 z-40"
            />
          </Dialog.Overlay>

          {/* Drawer */}
          <Dialog.Content asChild>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.2 }}
              className="fixed right-0 top-0 h-screen w-2/3 max-w-[814px] rounded-tl-2xl rounded-bl-2xl bg-dark-bg-2 shadow-lg z-50 flex"
            >
              {/* box-1 */}
              <div className="w-1/2 h-full border-e border-dark-line p-6 flex flex-col">
                {/* row-1 */}
                <Dialog.Close asChild>
                  <button className="cursor-pointer">
                    <Icon id="back" className="text-white w-6 h-6" />
                  </button>
                </Dialog.Close>
                {/* row-2 */}
                <div className="w-full flex items-start mt-10">
                  <div className="w-full flex flex-col">
                    <h2 className="text-h1 text-white">Confirmation</h2>
                    <p className="text-light-text text-body-large-medium mt-2">
                      Orders #00002
                    </p>
                  </div>
                  <Button className="flex-1" justIcon>
                    <Icon id="plus" className="text-white" />
                  </Button>
                </div>
                {/* row-3 */}
                <div className="overflow-auto border-y border-dark-line py-6 mt-6">
                  <OrderFoodList />
                </div>
                {/* row-4 */}
                <div className="mt-6 ">
                  <CostSummary />
                </div>
              </div>
              {/* box-2 */}
              <div className="w-1/2 p-6 flex flex-col">
                {/* row-1 */}
                <h2 className="mt-16 text-h1 text-white">Payment</h2>
                <p className="text-light-text text-body-large-medium mt-2">
                  3 payment method available
                </p>
                {/* line */}
                <span className="my-6 h-0.25  bg-dark-line w-full"></span>
                {/* row-2 */}
                <div className="w-full flex flex-col justify-between flex-1">
                  <div className="w-full flex flex-col gap-y-4">
                    <h4 className="text-h2 text-white">Payment Method</h4>
                    <PaymentMethod />
                    <Label text="Cardholder Name">
                      <Input className="w-full" placeholder="Levi Ackerman" />
                    </Label>
                    <Label text="Card Number">
                      <Input
                        className="w-full"
                        placeholder="2564 1421 0897 1244"
                      />
                    </Label>
                    <div className="w-full flex gap-x-3">
                      <Label text="Expiration Date">
                        <Input placeholder="02/2022" />
                      </Label>

                      <Label text="CVV">
                        <Input placeholder="000" />
                      </Label>
                    </div>
                    {/* line */}
                    <span className="h-0.25  bg-dark-line w-full"></span>
                    <div className="w-full flex gap-x-3">
                      <Label className="w-full" text="Table no.">
                        <Input className="" placeholder="145" />
                      </Label>
                      <Label className="w-full" text="Order Type">
                        <Select
                          className="w-full"
                          name="orderType"
                          options={[{ label: "Dine In", value: "dineIn" }]}
                        />
                      </Label>
                    </div>
                  </div>
                  <div className="w-full flex gap-x-2">
                    <Dialog.Close asChild>
                      <Button className="w-full" variant="outline">
                        Cancel
                      </Button>
                    </Dialog.Close>
                    <Button className="w-full">Confirm Payment</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </Dialog.Content>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}
