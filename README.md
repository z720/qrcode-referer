# Qr Code as a Service 

![QR Code for this page](https://qr.api.z720.net/qrcode)

Welcome to my QR Code generator service. It only do 1 thing: display the QR Code for current page.


## How to use

``` 
<img src="https://{localhost:3000}/v1" />
```
Just put the above code to your page and it will be replaced by a QR code referencing current page


    
How it works: When an image is embedded in a page the browser sends a request with the current page as a referer header. The service use that header to build and return the qr code as a PNG imnage.


## Addtional parameters and customization

You can change the look of the qr code with the following parameters:

### Colors

```
<img src="https://{localhost:3000}/v1?color=CC0000&amp;background=00000000" />
```

`color` and `background` (default value `#000` and `#FFF`): allows to change the color respectively of the squares and background color. It should be an RGB code with hex values (ex: `red` as `FF0000`). It's even possible to use transparency in the code at the end of the code (ex: transparent is `00000000`).

Example red on transparent:

<img class="example" src="https://qr.api.z720.net/qrcode?color=CC0000&background=00000000" alt="Red on transparent code"/>

### Picture Size

```
<img src="https://{localhost:3000}/v1?size=200" />
```

`size` (default value: auto) : allows to enlarge the code to a define size. The image will be set to the specified size unless it's larger.
                
Example size 200:

<img class="example" src="https://qr.api.z720.net/qrcode?size=200" alt="QR Code 150px wide"/>

### Code Scale (Pixel Size)

```
<img src="https://{localhost:3000}/v1?scale=1" />
```

`scale` (default value 4) : allows to specify the size of each square in the code - and has an impact on the size of the image. 

Example scale 1px:

<img class="example" src="https://qr.api.z720.net/qrcode?scale=1" alt="QR Code with 1px squares"/>

