import React from "react";
import { ScrollView, Text } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
  return (
    <ScrollView>
      <Card wrapperStyle={{ margin: 20 }}>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text>1 Camptime Way</Text>
        <Text>Seattle, WA 98241</Text>
        <Text style={{ marginBottom: 10 }}>U.S.A</Text>
        <Text>Phone:1-855-242-2267</Text>
        <Text>Email: campsites@camptime.com</Text>
      </Card>
    </ScrollView>
  );
};

export default ContactScreen;
