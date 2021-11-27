# Configurações

<details>
<summary>
Como abrir as configurações?
</summary>
Você pode abrir as configurações no Xplorer clicando no botão `Ajustes` à esquerda do Xplorer.

![Configurações](/img/docs/settings.png)

</details> <details>
<summary>
How to exit from Settings?
</summary>
You can exit from Settings on Xplorer by clicking on the upside left of Xplorer.

![Ajustes](/img/docs/exit-settings.png)

</details>

## Appearance

### App Theme

Você pode alterar o tema do aplicativo do Xplorer's na aba `Aparência` das Configurações. Temas padrão disponíveis são `light`, `light+`, `dark` e `dark+`. Além disso, tem o tema `System Default` que irá ler automaticamente suas preferências do sistema. :::info O Xplorer suporta tema personalizado em breve, fique ligado! :::

### Font Family

You can change Xplorer's font family on the `Appearance` tab of the Settings to one of installed font families installed on your system.

### Font Size

You can change Xplorer's font size on the `Appearance` tab of the Settings. Please note that an ideal font size is between 10px to 30px.

### Window Transparency

Make Xplorer window transparent on the `Appearance` tab of the Settings by combining following options. Please note that an ideal transparency is between 70% to 100%. You can disable transparency by disable all of the transparency options.

#### Transparent Sidebar

Make the sidebar transparent ![Transparent Sidebar](/img/docs/transparent-sidebar.png)

#### Transparent Topbar

Make the topbar transparent ![Transparent Topbar](/img/docs/transparent-topbar.png)

#### Transparent Workspace

make the workspace transparent ![Transparent Workspace](/img/docs/transparent-workspace.png)

### Frame Style

You can choose the frame style on the `Appearance` tab of the Settings. The available options are `Default` and `System Default`. `Default` will use Xplorer's default style which is the same across platforms. `System Default` will use the system default frame style which is difference according to your platform.

### File Preview

File Preview here might means the file thumbnail.

#### Automatically play video file as thumbnail

This will automatically play the video file as a preview. :::caution THIS MIGHT CONSUME HIGH AMOUNT OF RAM This might consume a high amount of RAM because it's built on the HTML video player. You can just enable this setting and ignore this caution if you got a good-spec computer. :::

#### Preview image on hover

This fill automatically show the image when you hovering it for 500ms.

![Preview on hover](/img/docs/preview-on-hover.png)

Some people might found it annoying and you can disable it by disabling this setting.

#### Extract exe file icon and make it as the thumbnail

This will parse and cache the icon from a `exe` file and make it a preview. Only on Windows.

![Extract Exe file icon](/img/docs/extract-exe-icon.png)

:::warning This might causes Xplorer to crash.

This is because Xplorer parses the icon from the exe and if the hexadecimal of the exe file is broken, Xplorer crashes.

The way to fix it is to disable the setting.

:::

:::info Open issue The current approach is by calling the powershell program which might pops up cmd windows.

Any contribution to call it directly from Xplorer is welcome. :::

#### Show Image as Thumbnail

This will show the image as a thumbnail of a file. Please note that this is not recommended for large directory as it reads the image to memory.

#### Default file layout

Default file layout of a directory. Just give it a try :)

## Preference

### App Language

Localize Xplorer. Help us translate Xplorer [here](https://github.com/kimlimjustin/xplorer/discussions/30).

### Hide Hidden Files

Hide hidden files on Xplorer, you can find this setting on the `Preference` tab on Xplorer or by its shortcut, `Ctrl + H`.

### Hide System Files

Hide Windows' system files on Xplorer. :::tip Learn what is system file [here](https://en.wikipedia.org/wiki/System_file). Just turn it off if you don't understand what it is. :::

### List and sort directories alongside files

If disabled, Xplorer will prioritize directories above files.

### Detect Drive Change

Turning this on will detect drive change and update the sidebar and drives section. Please note that this will take high ammount of RAM as this is not stabilized yet.

### On startup

Option to do on starting Xplorer. Available options are:

-   New Tab
-   Continue previous session
