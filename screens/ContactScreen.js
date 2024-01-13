import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";
import * as Animatable from "react-native-animatable";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Animatable.View animation="fadeInDown" duration={2000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text>1 Camptime Way</Text>
          <Text>Seattle, WA 98241</Text>
          <Text style={{ marginBottom: 10 }}>U.S.A</Text>
          <Text>Phone:1-855-242-2267</Text>
          <Text>Email: campsites@camptime.com</Text>
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;
