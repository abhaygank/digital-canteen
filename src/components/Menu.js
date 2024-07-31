import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, Modal } from 'react-bootstrap';

const Menu = ({ role, addToCart }) => {
  const initialMenuItems = [
    {
      id: 1,
      name: 'Puri/Baji Kurma',
      description: 'Deep-fried rounds of flour and a spiced potato dish which may be dry.',
      price: '40',
      image: 'https://thumbs.dreamstime.com/b/aloo-sabzi-gravy-accompanied-fried-puri-aloo-puri-potato-curry-fried-poori-popular-indian-breakfast-lunch-dinner-176029419.jpg',
      filters: ['breakfast', 'lunch'],
    },
    {
      id: 2,
      name: 'Plain Dosa',
      description: 'A thin, savoury crepe made from a fermented batter of ground white gram and rice.',
      price: '40',
      image: 'https://images.tv9hindi.com/wp-content/uploads/2023/10/dosa-.jpg',
      filters: ['breakfast'],
    },
    {
      id: 3,
      name: 'Chapati',
      description: 'Round flat unleavened bread that is usually made of whole wheat flour and cooked on a griddle.',
      price: '20',
      image: 'https://t4.ftcdn.net/jpg/01/01/71/05/360_F_101710585_mjWXkNav1nX4Ph33MqYd79FdVUWBbKyD.jpg',
      filters: ['lunch'],
    },
    {
      id: 4,
      name: 'Porota',
      description: 'A layered flatbread, made with ghee or oil and maida.',
      price: '40',
      image: 'https://i.pinimg.com/originals/04/12/77/041277a199ad297a15cd0ffa7d8bb10d.jpg',
      filters: ['breakfast', 'dinner'],
    },
    {
      id: 5,
      name: 'Veg Fried Rice',
      description: 'Cooked rice that has been stir-fried in a wok or a frying pan and is mixed with other ingredients such as eggs, vegetables.',
      price: '65',
      image: 'https://t4.ftcdn.net/jpg/06/09/35/79/360_F_609357995_9f5MTF73kiu6UYAtpJZRT9BFWet4l3fX.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 6,
      name: 'Noodles',
      description: 'A cooked egg-and-flour paste prominent in European and Asian cuisine.',
      price: '75',
      image: 'https://choosingchia.com/jessh-jessh/uploads/2022/02/Spicy-Chili-OIl-Noodles-11-2-680x1020.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 7,
      name: 'Biryani',
      description: 'A mixed rice dish.',
      price: '80',
      image: 'https://i.pinimg.com/originals/b4/5f/1c/b45f1c07ead6ece951522dfa46b64f26.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 8,
      name: 'Lemon Rice',
      description: 'Lemon flavoured cooked rice',
      price: '40',
      image: 'https://images.squarespace-cdn.com/content/v1/60487208da599620d0a61a05/88988e92-c8a5-4dcd-8f9c-141459f3d6f3/Lemon+rice+1+.jpg',
      filters: ['lunch'],
    },
    {
      id: 9,
      name: 'Mini meals',
      description: 'Sambar, Palya, Pickle',
      price: '45',
      image: 'https://i.pinimg.com/736x/02/5e/eb/025eeb52a26e22151b9440695d1025e9.jpg',
      filters: ['lunch'],
    },
    {
      id: 10,
      name: 'Special Meal',
      description: '2 Puri/chapati, Curd, Palya, Gassi',
      price: '60',
      image: 'https://i.pinimg.com/736x/3f/aa/04/3faa04682ec48de810f1260988847aab.jpg',
      filters: ['lunch'],
    },
    {
      id: 11,
      name: 'Masala Dosa',
      description: 'A crepe made using fermented rice and lentil batter.',
      price: '50',
      image: 'https://i.pinimg.com/originals/67/9b/e0/679be0f58392abd2bb7a24faf649e09b.jpg',
      filters: ['breakfast'],
    },
    {
      id: 12,
      name: 'Upma',
      description: 'A dish of thick porridge from coarse rice flour',
      price: '40',
      image: 'https://farm7.static.flickr.com/6187/6046099460_96722da771.jpg',
      filters: ['breakfast'],
    },
    {
      id: 13,
      name: 'Jeera rice',
      description: 'Rice dish made by cooking basmati rice along with whole spices and then tempering with cumin seeds and green chilies.',
      price: '50',
      image: 'https://images.squarespace-cdn.com/content/v1/584c9419d2b8572e193feb73/1599085054512-PVA3IGOMZCLTKWQGTRGR/Jeera+rice+%283+of+1%29.jpg',
      filters: ['lunch', 'dinner'],
    },
    {
      id: 14,
      name: 'Gobi Manchuri',
      description: 'Battered and deep-fried cauliflower (gobi) tossed in a flavorful sauce made with soy sauce, chili sauce, and a generous amount of aromatics.',
      price: '55',
      image: 'https://img.freepik.com/premium-photo/selective-focus-gobi-manchurian-dry-popular-street-meal-india-made-with-cauliflower-florets_410516-20705.jpg',
      filters: ['snacks', 'appetizers'],
    },
    {
      id: 15,
      name: 'Veg Sandwich',
      description: 'Vegetarian sandwich consisting of a vegetable filling between bread',
      price: '40',
      image: 'https://cdn.loveandlemons.com/wp-content/uploads/2018/05/IMG_12147-2.jpg',
      filters: ['snacks', 'lunch'],
    },
    {
      id: 16,
      name: 'Burger',
      description: 'Delicious burger with fries',
      price: '10',
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20221005/pngtree-aesthetic-photograph-of-burger-and-fries-plate-from-the-front-view-photo-image_39521470.jpg',
      filters: ['snacks'],
    },
    {
      id: 17,
      name: 'Pizza',
      description: 'Delicious cheese pizza',
      price: '55',
      image: 'https://img.freepik.com/premium-photo/aesthetic-dripping-tasty-pizza-slice-generative-ai_863013-1954.jpg',
      filters: ['snacks', 'dinner'],
    },
    {
      id: 18,
      name: 'Massala puri',
      description: 'Delicious burger with fries',
      price: '40',
      image: 'https://i.pinimg.com/736x/96/37/a4/9637a4c08f9c6c136e05bb8a6d605351.jpg',
      filters: ['snacks'],
    },
    {
      id: 19,
      name: 'Sev puri',
      description: 'Delicious burger with fries',
      price: '40',
      image: 'https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/sev-puri-2.jpg',
      filters: ['snacks'],
    },
    {
      id: 20,
      name: 'Dahi puri',
      description: 'Delicious burger with fries',
      price: '50',
      image: 'https://i.pinimg.com/736x/bc/54/8a/bc548a4846d7671b9dc69e534ff2b5ef.jpg',
      filters: ['snacks'],
    },
    {
      id: 21,
      name: 'Samosa',
      description: 'Fresh evening snacks',
      price: '15',
      image: 'https://png.pngtree.com/thumb_back/fw800/background/20240204/pngtree-delicious-samosas-samsa-with-meat-on-wooden-table-top-view-east-image_15595063.png',
      filters: ['snacks'],
    },
    {
      id: 22,
      name: 'Veg roll',
      description: 'Snacks',
      price: '10',
      image: 'https://i.pinimg.com/736x/a7/0b/8f/a70b8fde37a14292f7d318fbe951fc7c.jpg',
      filters: ['snacks'],
    },
    {
      id: 23,
      name: 'Egg puff',
      description: 'Snacks',
      price: '10',
      image: 'https://www.licious.in/blog/wp-content/uploads/2022/01/shutterstock_1450591601-600x600.jpg',
      filters: ['snacks'],
    },
    {
      id: 24,
      name: 'Fresh Orange Juice',
      description: 'Freshly squeezed orange juice',
      price: '35',
      image: 'https://i.pinimg.com/originals/a6/90/ff/a690ff4889afd75533f160baef8c1bfe.jpg',
      filters: ['juices'],
    },
    {
      id: 25,
      name: 'Watermelon Juice',
      description: 'Refreshing watermelon juice',
      price: '40',
      image: 'https://img.freepik.com/premium-photo/watermelon-juice-with-splashes-with-watermelon-fruit-studio-background-restaurant-with-garden_741910-8428.jpg',
      filters: ['juices'],
    },
    {
      id: 26,
      name: 'Mango Juice',
      description: 'Sweet and tangy mango juice',
      price: '45',
      image: 'https://c0.wallpaperflare.com/preview/845/108/996/mango-and-lemon-juice.jpg',
      filters: ['juices'],
    }
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const handleAddOrEdit = (item) => {
    if (editItem) {
      setMenuItems(menuItems.map(mi => mi.id === item.id ? item : mi));
    } else {
      setMenuItems([...menuItems, { ...item, id: menuItems.length + 1 }]);
    }
    setShowModal(false);
  };

  const handleDelete = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <Container>
      <Row>
        {menuItems.map(item => (
          <Col key={item.id} md={4}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>Price: ₹{item.price}</Card.Text>
                {role === 'admin' && (
                  <>
                    <Button variant="warning" onClick={() => { setEditItem(item); setShowModal(true); }}>Edit</Button>
                    <Button variant="danger" onClick={() => handleDelete(item.id)}>Delete</Button>
                  </>
                )}
                {role !== 'admin' && (
                  <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {role === 'admin' && (
        <Button variant="success" onClick={() => { setEditItem(null); setShowModal(true); }}>Add New Item</Button>
      )}
      <MenuItemModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onSave={handleAddOrEdit}
        editItem={editItem}
      />
    </Container>
  );
};

const MenuItemModal = ({ show, onHide, onSave, editItem }) => {
  const [item, setItem] = useState(editItem || { name: '', description: '', price: '', image: '', filters: [] });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(item);
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{editItem ? 'Edit Item' : 'Add New Item'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={item.name}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={item.description}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={item.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={item.image}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Filters (comma separated)</Form.Label>
            <Form.Control
              type="text"
              name="filters"
              value={item.filters.join(', ')}
              onChange={(e) => setItem({ ...item, filters: e.target.value.split(',').map(f => f.trim()) })}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Menu;