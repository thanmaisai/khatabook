import React from 'react';
import { Button, Menu, Text, Container } from '@mantine/core';


const Header = () => {
  return (
    <header>
        <Container>
            <div style={{}}>
                <Text>
                    KhathaBook
                </Text>
            </div>
            <Menu>
                <Menu.Target>
                    <Button>
                        god knows
                    </Button>
                </Menu.Target>
                <Menu.Dropdown>
                    <Menu.Item>LogOut</Menu.Item>
                </Menu.Dropdown>
            </Menu>
        </Container>
    </header>
  );
}

export default Header;
