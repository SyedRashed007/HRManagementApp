import React from "react";
import { Card, Image, Text, Avatar, Badge, Embed } from "theme-ui";
import "./theme.css";

function Theme() {
  return (
    <div className="component">
      <u>
        <p className="typography">Card</p>
      </u>
      <Card
        sx={{
          maxWidth: 256,
        }}
      >
        <Image src="https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9" />
        <Text>Card</Text>
      </Card>
      <u>
        <p className="typography">Badge</p>
      </u>
      <Avatar src="https://raw.githubusercontent.com/system-ui/theme-ui/stable/packages/docs/static/icon.png" />
      <Badge variant="circle" ml={-3} mt={-3}>
        16
      </Badge>
      <u>
        <p className="typography">Embed</p>
      </u>
      {/* change height and width  */}
      <Embed
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        sx={{
          height: "10%",
          width: "50%",
        }}
      />
    </div>
  );
}

export default Theme;
