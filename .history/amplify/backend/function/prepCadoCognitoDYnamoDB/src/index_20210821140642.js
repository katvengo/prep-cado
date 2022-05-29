/* Amplify Params - DO NOT EDIT
	API_PREPCADO_GRAPHQLAPIIDOUTPUT
	API_PREPCADO_USERTABLE_ARN
	API_PREPCADO_USERTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
