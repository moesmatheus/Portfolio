import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Container from '@material-ui/core/Container';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import StorageIcon from '@material-ui/icons/Storage';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import RoomIcon from '@material-ui/icons/Room';

export default function ListPort(){
    return (
    <div>

        <List component="nav" aria-label="main mailbox folders">
            
        <ListItem button component="a" href="https://bdata-fin.herokuapp.com/fundos">
          <ListItemIcon>
            <TrendingUpIcon />
          </ListItemIcon>
          <ListItemText primary="bData" secondary="Financial Information Project" />
        </ListItem>

        <ListItem button component="a" href="https://www.pdf-excel.app/">
          <ListItemIcon>
            <PictureAsPdfIcon/>
          </ListItemIcon>
          <ListItemText primary="PDF-Excel" secondary="A tool for extracting tabular data from PDF files " />
        </ListItem>

        <ListItem button component="a" href="https://aceleradev-3w.herokuapp.com/">
            <ListItemIcon>
                <ExploreIcon/>
            </ListItemIcon>
            <ListItemText primary="Exploratory Analysis" secondary="Simple Exploratory analysis app" />
        </ListItem>

        <ListItem button component="a" href="https://github.com/moesmatheus/text-mining-mba/blob/master/NLP.ipynb">
            <ListItemIcon>
                <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary="Text Mining" secondary="Jupyter Notebook performing text mining book" />
        </ListItem>

        <ListItem button component="a" href="https://github.com/moesmatheus/estatistica-espacial-2/blob/master/semana-2.ipynb">
            <ListItemIcon>
                <RoomIcon/>
            </ListItemIcon>
            <ListItemText primary="Spatial Statistics" secondary="Jupyter Notebook with spatial statistics using GeoPandas" />
        </ListItem>

        <ListItem button component="a" href="https://github.com/moesmatheus/projeto-mba-spark/blob/master/trabalho.ipynb">
            <ListItemIcon>
                <StorageIcon/>
            </ListItemIcon>
            <ListItemText primary="PySpark" secondary="Jupyter Notebook with PySpark Machine Learning applications" />
        </ListItem>

        <ListItem button component="a" href="https://github.com/moesmatheus/Series-Temporais/blob/master/fertilizantes.pdf">
            <ListItemIcon>
                <HourglassEmptyIcon/>
            </ListItemIcon>
            <ListItemText primary="Time Series Analysis" secondary="Set of time series techniques using R" />
        </ListItem>

      </List>

    </div>
    )
}