import { Box, useMediaQuery, TextField } from "@mui/material" 
import { getIn } from "formik"

const AddressForm = ({
    type,
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue
}) => {
    const isNonMobile = useMediaQuery("(min-width: 600px)");

    const formattedName = (field) => `${type}.${field}`;

    const formattedError = (field) =>
        Boolean(
            getIn(touched, formattedName(field)) && 
            getIn(errors, formattedName(field)) 
        )

    const formattedhelper = (field) => 
        getIn(touched, formattedName(field)) && getIn(errors, formattedName(field)) 

    return (
        <Box
            display="grid"
            gap="15px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" }
            }}
        >
            <TextField 
                fullWidth
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name={formattedName("firstName")}
                error={formattedError("firstName")}
                helperText={formattedhelper("firstName")}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField 
                fullWidth
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name={formattedName("lastName")}
                error={formattedError("lastName")}
                helperText={formattedhelper("lastName")}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField 
                fullWidth
                type="text"
                label="Country"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.country}
                name={formattedName("country")}
                error={formattedError("country")}
                helperText={formattedhelper("country")}
                sx={{ gridColumn: "span 4" }}
            />

            <TextField 
                fullWidth
                type="text"
                label="Street Address"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.street1}
                name={formattedName("street1")}
                error={formattedError("street1")}
                helperText={formattedhelper("street1")}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField 
                fullWidth
                type="text"
                label="Street Address 2 (optional)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.street2}
                name={formattedName("street2")}
                error={formattedError("street2")}
                helperText={formattedhelper("street2")}
                sx={{ gridColumn: "span 2" }}
            />
            
            <TextField 
                fullWidth
                type="text"
                label="City"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.city}
                name={formattedName("city")}
                error={formattedError("city")}
                helperText={formattedhelper("city")}
                sx={{ gridColumn: "span 2" }}
            />

            <TextField 
                fullWidth
                type="text"
                label="State"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.state}
                name={formattedName("state")}
                error={formattedError("state")}
                helperText={formattedhelper("state")}
                sx={{ gridColumn: "span 1" }}
            />

            <TextField 
                fullWidth
                type="text"
                label="Pin Code"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.zipCode}
                name={formattedName("zipCode")}
                error={formattedError("zipCode")}
                helperText={formattedhelper("zipCode")}
                sx={{ gridColumn: "span 1" }}
            />
        </Box>
    )
}

export default AddressForm