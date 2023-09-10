import jwt_decode from "jwt-decode";
import { Box, Dialog, List, ListItem, Typography, styled } from "@mui/material";
import { qrCodeImage } from "../../data";
import { GoogleLogin } from "@react-oauth/google";

const DialogStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
  overflow: "hidden",
};

const Component = styled(Box)`
  display: flex;
`;

const Containar = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Qrcode = styled("img")`
  width: 264px;
  height: 264px;
  margin: 50px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  color: #7e7a7a;
  font-weight: 300;
  font-family: inherit;
  margin-bottom: 25px;
`;

const ListStyle = styled(List)`
  & > li {
    padding: 0;
    margin-top: 15px;
    font-size: 18px;
    line-height: 28px;
    color: #4a4a4a;
  }
`;

// Google
const GoogleContainar = styled(Box)`
  position: relative;
`;
const GoogleBox = styled(Box)`
  position: absolute;
  top: 40%;
  left: 20%;
`;
const LoginDialog = () => {
  const onLoginSuccess = (res) => {
    const decodedHeader = jwt_decode(res.credential);
    console.log(decodedHeader);
  };
  const onLoginError = (res) => {
    console.log(res);
  };
  return (
    <Dialog open={true} PaperProps={{ sx: DialogStyle }}>
      <Component>
        <Containar>
          <Title>To use Whatsapp on your computer:</Title>
          <ListStyle>
            <ListItem>1. Open whatsapp on your phone</ListItem>
            <ListItem>2. Tap Menu Setting and select whatsapp web</ListItem>
            <ListItem>
              3. Point your phone to this screen to capture the code
            </ListItem>
          </ListStyle>
        </Containar>

        <GoogleContainar>
          <Qrcode src={qrCodeImage} alt="qrCodeImage" />
          <GoogleBox>
            <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
          </GoogleBox>
        </GoogleContainar>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
