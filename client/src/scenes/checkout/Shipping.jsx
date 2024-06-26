import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material"
import  AddressForm from "./AddressForm"

const Shipping = ({
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
}) => {
    return (
        <Box m="30px auto">
            {/* BILLING FORM */}
            <Box>
                <Typography sx={{mb: "15px"}} fontSize="18px">
                    Billing Information
                </Typography>
                <AddressForm 
                    type="billingAddress"
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    setFieldValue={setFieldValue}
                />
            </Box>

            <Box mb="20px">
                <FormControlLabel
                    label="Same for Shipping Address"
                    control={
                        <Checkbox
                            defaultChecked
                            values={values.shippingAddress.isSameAddress}
                            onChange={() => setFieldValue(
                                "shippingAddress.isSameAddress",
                                !values.shippingAddress.isSameAddress
                            )}
                        />
                    }
                />
            </Box>

            {/* SHIPPING FORM */}
            {!values.shippingAddress.isSameAddress && (
                <Box>
                    <Typography sx={{mb: "15px"}} fontSize="18px">
                    Shipping Information
                    </Typography>

                    <AddressForm 
                    type="shippingAddress"
                    values={values.shippingAddress}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                />
                </Box>
            )}
        </Box>
    )
}

export default Shipping