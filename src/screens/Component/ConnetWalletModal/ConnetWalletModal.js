import {
  IconButton,
  Modal,
  Paper,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import useStyles from "./styles/ConnectWalletModal.styles";
import CloseIcon from "@material-ui/icons/Close";
import WarnnigIcon from "@material-ui/icons/ErrorOutline";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ConnetWalletModalButton from "./ConnetWalletModalButton";
const ConnetWalletModal = ({ isOpen, onClose }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Slide in={isOpen} direction="down">
        <Paper className={classes.modal}>
          <div className={classes.topPart}>
            <div>
              <Typography color="primary" className={classes.title}>
                Connect a wallet
              </Typography>
            </div>
            <div>
              <IconButton onClick={onClose}>
                <CloseIcon color="secondary" />
              </IconButton>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.partContianer}>
              <div className={classes.descriptionContianer}>
                <Typography className={classes.description} variant="h6">
                  By connecting a wallet, you agree to Uniswap Labs’ Terms of
                  Service and acknowledge that you have read and understand the
                  Uniswap Protocol Disclaimer.
                </Typography>
              </div>
              <div className={classes.howThisAppContainer}>
                <div className={classes.flexDirection}>
                  <div>
                    <WarnnigIcon className={classes.warnnigIcon} />
                  </div>
                  <Typography className={classes.description} variant="h6">
                    How this app uses APIs
                  </Typography>
                </div>
                <div>
                  <ArrowForwardIcon className={classes.arrowIcon} />
                </div>
              </div>
              {!isSmallScreen && (
                <div>
                  <ConnetWalletModalButton
                    text="Install Metamask"
                    img="https://app.uniswap.org/static/media/metamask.02e3ec27.png"
                  />
                </div>
              )}
              <div>
                <ConnetWalletModalButton
                  text="Wallet Connect"
                  img="https://app.uniswap.org/static/media/walletConnectIcon.304e3277.svg"
                />
              </div>
              {!isSmallScreen && (
                <div>
                  <ConnetWalletModalButton
                    text="Coinbase Wallet"
                    img="https://app.uniswap.org/static/media/walletConnectIcon.304e3277.svg"
                  />
                </div>
              )}
              <div>
                <ConnetWalletModalButton
                  text="Fortmatic"
                  img="https://gblobscdn.gitbook.com/spaces%2F-Lj7HukBJLlR6jbx0-eP%2Favatar.png?alt=media"
                />
              </div>
              <div>
                <ConnetWalletModalButton
                  text="Portis"
                  img="https://app.uniswap.org/static/media/portisIcon.f44aba13.png"
                />
              </div>
            </div>
          </div>
        </Paper>
      </Slide>
    </Modal>
  );
};

export default ConnetWalletModal;
