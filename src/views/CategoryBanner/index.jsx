/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import NativeSelect from '@mui/material/NativeSelect';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { getMenus } from './api';
import { CategoryContext, CategoryProvider } from './context';
import withRoot from '../../components/withRoot';
import { CATEGORY } from '../../constants';

function Menu() {
  const { menu, setMenu, setCategoryName } = React.useContext(CategoryContext);
  const { category } = useParams();

  React.useLayoutEffect(() => {
    setCategoryName(category);
    getMenus(category).then(({ data: { menus: result } }) => {
      setMenu(result);
    });
  }, [getMenus]);

  if (menu.length === 0) {
    return <Container sx={{ my: 8, display: 'flex', height: '50vh' }} />;
  }

  return (
    <>
      <Container sx={{ my: 4, display: 'flex' }}>
        <NativeSelect
          defaultValue={category}
          onChange={(e) => {
            const category = e.target.value;
            setCategoryName(category);
            getMenus(category).then(({ data: { menus: result } }) => {
              setMenu(result);
            });
          }}
        >
          {CATEGORY.map((category) => (
            <option value={category.key} key={category.key}>
              {category.value}
            </option>
          ))}
        </NativeSelect>
      </Container>
      <Container sx={{ my: 6, display: 'flex' }}>
        <Grid container spacing={4}>
          {menu.map((data, index) => {
            const { title, subheader, imgUrl, description, tags } = data;
            return (
              <Grid key={index} item xs={3} sm={3} md={3}>
                <Card variant="outlined">
                  <CardHeader title={title} subheader={subheader} />
                  <CardMedia
                    component="img"
                    height="194"
                    image={imgUrl}
                    alt={title}
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <Stack direction="row" spacing={1}>
                        {tags.map((tag, key) => {
                          const { label, color } = tag;

                          return (
                            <Chip
                              label={label}
                              size="small"
                              color={color}
                              key={key}
                            />
                          );
                        })}
                      </Stack>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}

function CategoryBanner() {
  return (
    <CategoryProvider>
      <>
        <Header />
        <Menu />
        <Footer />
      </>
    </CategoryProvider>
  );
}

export default withRoot(CategoryBanner);
