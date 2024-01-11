import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './components/Markdown';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

export default function App() {
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Header />
      <Typography variant="h6" gutterBottom>
        Integrating google maps into react application
      </Typography>
      <Divider />
      <Markdown className="markdown">
        This is markdown
      </Markdown>
      <Footer 
        description='Made by Mykola Maik'
      />
    </Grid>
  );
}