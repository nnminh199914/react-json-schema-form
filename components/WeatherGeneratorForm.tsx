import * as React from "react";

//Mui 5 themed form
// themed form: https://www.npmjs.com/package/@rjsf/material-ui
import Form from "@rjsf/material-ui/dist/v5";
import jsonForm from "./schemaForm.json";
import uiSchema from "./uiSchema.json";
import formTheme, { plainTheme } from "../../../../themes/formTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
// import GeolocationField from "react-jsonschema-form-field-geolocation";
import GeolocationField from "../../../../Components/Forms/MapField";
import Weather from "../../../../models/Weather";
import 'ol/ol.css'
import 'ol-geocoder/dist/ol-geocoder.min.css'

const weatherConfig = {
  latitude: 52.5015,
  longitude: 13.4025,
};

interface formDataType {
  formData: object;
}

type Props = {};

export const WeatherGeneratorForm = ({}: Props) => {
  let [extraErrors, setExtraErrors] = React.useState<{
    [errorKey: string]: { __errors: string[] };
  }>({});

  const onSubmit = async ({ formData }: formDataType) => {
    //Log form data
    console.log("Data submitted: ", formData);

    //Using weather model
    let weather = new Weather(weatherConfig);
    try {
      let weatherData = await weather.generate(
        weatherConfig.latitude,
        weatherConfig.longitude
      );
      console.log("weatherData", weatherData);
    } catch (error: any) {
      setExtraErrors({
        ["Validation error"]: { __errors: [error?.message ?? "Generic error"] },
      });
    }
  };
  return (
    <ThemeProvider theme={formTheme}>
      <Form
        //   @ts-ignore
        fields={{ geolocation: GeolocationField }}
        schema={JSON.parse(JSON.stringify(jsonForm))}
        uiSchema={uiSchema as Object}
        onSubmit={onSubmit}
        extraErrors={extraErrors}
      />
    </ThemeProvider>
  );
};
