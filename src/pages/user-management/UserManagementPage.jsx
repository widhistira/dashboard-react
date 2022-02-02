import React from "react";
import Layout from "../../components/Layout/Layout";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import {
    Button,
    Card,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Switch,
    TextField,
    Typography
} from "@material-ui/core";
import MUIDataTable from "mui-datatables";
import Box from "@material-ui/core/Box";
import userData from "./UserData.json"
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(theme => ({
    my3: {
        margin: "1.3rem 0"
    },
    mb0: {
        marginBottom: 0
    },
    mRight: {
        marginRight: ".85rem"
    },
    p1: {
        padding: ".85rem"
    }
}));

const UserManagementPage = props => {
    const {history} = props;
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
        setState({...state, [event.target.name]: event.target.checked});
    };

    const [state, setState] = React.useState({
        checkedA: true
    });

    const options = {
        filterType: ""
    };

    const data = userData;

    const columns = [
        {
            name: "userid",
            label: "User Id",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "fullname",
            label: "Full Name",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "emailaddress",
            label: "Email Address",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "rolename",
            label: "Role Name",
            options: {
                filter: true,
                sort: false
            }
        },
        {
            name: "department",
            label: "Department",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "active",
            label: "Active",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <Switch
                        // checked={value === "active" ? true : false}
                        checked={state.checkedA}
                        onChange={handleChange}
                        color="primary"
                        name="checkedA"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
                )
            }
        },
        {
            name: "delete",
            label: "Delete",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value, tableMeta, updateValue) => (
                    <IconButton aria-label="delete">
                        <DeleteIcon color="secondary"/>
                    </IconButton>
                )
            }
        }
    ];

    return (

        <Layout>
            <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                    <Grid container className={classes.my3} alignItems="center">
                        <Grid item className={classes.mRight}>
                            <Typography variant="h5" component="h2" style={{color: "#C8252C"}}>
                                User & Role Management
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                onClick={() => history.push("/pages/posts/add-post")}
                                style={{
                                    margin: "-50px 0 0 1350px",
                                    color: "white",
                                    widht: "100%",
                                    backgroundColor: "#C8252C"
                                }}
                                variant="outlined"
                                size="medium"

                            >
                                Add New
                            </Button>
                        </Grid>
                    </Grid>

                    <Breadcrumbs path={history}/>
                    <Card className={classes.my3}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={3}>
                                <form className={classes.my3} noValidate autoComplete="off">
                                    <TextField id="userid" label="User ID" variant="outlined" size="medium" fullWidth/>
                                </form>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <form className={classes.my3} noValidate autoComplete="off">
                                    <TextField id="fullname" label="Full Name" variant="outlined" size="medium"
                                               fullWidth/>
                                </form>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <form className={classes.my3} noValidate autoComplete="off">
                                    <TextField id="emailaddress" label="Email Address" variant="outlined" size="medium"
                                               fullWidth/>
                                </form>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={3}>
                                <form className={classes.my3} noValidate autoComplete="off">
                                    <Box sx={{minWidth: 120}}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel id="rolename">Role Name</InputLabel>
                                            <Select
                                                labelId="rolename"
                                                id="Role Name"
                                                value={age}
                                                label="role Name"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Role Name 1</MenuItem>
                                                <MenuItem value={20}>Role Name 2</MenuItem>
                                                <MenuItem value={30}>Role Name 3</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </form>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <form className={classes.my3} noValidate autoComplete="off">
                                    <Box sx={{minWidth: 120}}>
                                        <FormControl variant="outlined" fullWidth>
                                            <InputLabel id="department">Department</InputLabel>
                                            <Select
                                                labelId="Department"
                                                id="Department"
                                                value={age}
                                                label="Department"
                                                onChange={handleChange}
                                            >
                                                <MenuItem value={10}>Production</MenuItem>
                                                <MenuItem value={20}>Tech</MenuItem>
                                                <MenuItem value={30}>HR</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </form>
                            </GridItem>
                        </GridContainer>
                        <Button
                            // onClick={() => history.push("/")}
                            style={{
                                margin: "30px 0 30px 500px",
                                color: "#C8252C",
                                widht: "100%",
                                // backgroundColor: "#C8252C"
                                borderColor: "red"
                            }}
                            variant="outlined"
                            size="big"

                        >
                            Clear
                        </Button>
                        <Button
                            // onClick={() => history.push("/")}
                            style={{
                                margin: "30px 0 30px 50px",
                                color: "#C8252C",
                                widht: "100%",
                                // backgroundColor: "#C8252C"
                                borderColor: "red"
                            }}
                            variant="outlined"
                            size="big"

                        >
                            Filter
                        </Button>
                    </Card>

                    <MUIDataTable
                        title={"User List"}
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </GridItem>
            </GridContainer>
        </Layout>

    );
};


export default UserManagementPage;
