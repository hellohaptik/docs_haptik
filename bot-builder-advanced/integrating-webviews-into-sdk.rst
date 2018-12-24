.. _header-n0:

Intergrating Webviews into Android and iOS SDKs
===============================================
This page will cover the following topics:

Overview_

Displaying-the-Webview_

Closing-the-Webview_

.. _Overview:

Overview
--------
The existing functionality of the Android and iOS SDKs can be extended
by using native webview of each of the devices. This can be used to
render custom content, take payments or other experiences which may be
difficult to offer with messages.

.. figure:: Apps-Webview.png
   :alt:

.. _header-n8:

.. _Displaying-the-Webview:

Displaying the Webview
----------------------

The Webview is displayed by sending a a Smart Action message with the
``SELF_SERVE_WEB`` URI

Smart Action Syntax

.. code:: json


    {
      "text": "Enter the message copy here.",
      "type": "BUTTON",
      "data": {
        "items": [
          {
            "actionable_text": "Button message here",
            "location_required": false,
            "uri": "SELF_SERVE_WEB",
            "is_default": 1,
            "type": "APP_ACTION",
            "payload": {
              "url": "Provide your URL Here",
              "link": "",
              "gogo_message": ""
            },
            "emoji": ""
          }
        ]
      }
    }

.. _header-n16:

.. _Closing-the-webview:

Closing the Webview
-------------------

The webview can be closed by redirecting itself to a url on the
``haptik-webview`` domain. The Native application will listen to the a
change on the URL and the webview will be closed and a message, if
present will be sent to the user

.. code:: http

    http://haptik-webview//perform-action?action=close&message={message}&message_type={message_type}

+-----------------------+-----------------------+-----------------------+
| Query Parameters      | Value                 | Sample                |
+=======================+=======================+=======================+
| action                | close                 |                       |
+-----------------------+-----------------------+-----------------------+
| message               | The message to be     | "Thanks for providing |
|                       | sent when the webview | the information"      |
|                       | is closed.            |                       |
+-----------------------+-----------------------+-----------------------+
| message_type          | The type of message   | 16                    |
|                       | to be sent. For more  |                       |
|                       | information refer to  |                       |
|                       | the message types     |                       |
|                       | documentation.        |                       |
+-----------------------+-----------------------+-----------------------+
