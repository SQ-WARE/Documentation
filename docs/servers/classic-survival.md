# Classic Survival: A Pure Vanilla Experience

Welcome to Classic Survival, a pure Vanilla Minecraft server built for an authentic, long-term experience. Our world never resets and is always updated to the latest Minecraft version, so your creations can truly stand the test of time.

## Getting Started

Here's what you need to know for your first few days on the server.

### Your First Steps
You'll begin your adventure just like a new single-player world—no starter kits or handouts. The world is yours to explore. Chunks generate as you travel, and the 10,000x10,000 block world border expands with each major Minecraft update, always revealing new terrain.

### Basic Rules & Fair Play
Our main rule is to use common sense. Cheating, griefing, and exploiting bugs are not tolerated. We use a robust anti-cheat system to block X-rays, scripts, and other malicious clients. 

If you encounter a large-scale build destroyed by another player, contact an Admin for a potential rollback. Similarly, if you find a game mechanic that doesn't feel vanilla (like a broken redstone machine), please report it.

### Essential Commands
*   **/sethome [name]**: Sets your home location. You can have up to 2 homes.
*   **/home [name]**: Teleports you to your set home.
*   **/tpa <player>**: Request to teleport to another player.
*   **/spawn**: Teleports you to the server's spawn point.
*   A **10-minute cooldown** is shared across all teleportation commands.

## Core Gameplay Mechanics

### The Economy: Points & Player Shops
The server currency is **Points**. There is no server-run shop; all items and resources must be gathered naturally or traded with others. You can use the **Player Shops** system to safely trade items for Points. Points can be earned by playing hourly, voting for the server, or participating in other SQWARE gamemodes.

### The End: Repeatable Dragon Fights
The Ender Dragon is not a one-time event. It can be fought by multiple players, and a dragon egg will drop for each successful fight, giving everyone a chance to earn the trophy.

## Protecting Your Land with Bolt
We use the **Bolt** plugin to protect your builds. While it's powerful, it's important to understand how it works to keep your items safe.

### How Protections Work
Many blocks are **automatically protected** the moment you place them, creating a private lock that only you can access. This includes most containers, workstations, doors, and banners. For other items, or to create different types of protections (like public or deposit chests), you'll need to use Bolt commands.

### What Can Be Protected?
Bolt protects a wide variety of blocks and entities, including:
*   **Containers & Workstations:** Chests, Barrels, Furnaces, Shulker Boxes, Brewing Stands, etc.
*   **Doors & Gates:** All types of Doors, Trapdoors, and Fence Gates.
*   **Decorative Blocks:** Banners, Signs, Lecterns, Note Blocks, Armor Stands.
*   **Entities:** Item Frames, Paintings, and all types of Chest Boats/Minecarts.

### Protection Commands
Most commands work by typing them and then punching the block you want to affect.

#### Basic Protections
*   **/bolt lock** or **/bolt lock private**: Creates a private protection. This is the default for auto-locked items.
*   **/bolt lock public**: Creates a public protection. Anyone can use it, but only you can break it.
*   **/bolt lock deposit**: Creates a donation chest. Anyone can add items, but only you can remove them.
*   **/bolt lock display**: Creates a display. Anyone can see the contents, but not interact.
*   **/bolt unlock**: Removes a protection you own.

#### Sharing & Access
*   **/bolt edit add <player>**: Gives a player access to your locked block.
*   **/bolt edit remove <player>**: Removes a player's access.

#### Tips & Tricks
*   **/bolt info**: Punch a block to see who owns it and who has access.
*   **/bolt mode persist**: Toggles persist mode. This lets you apply the same command to multiple blocks without re-typing it. For example, run `/bolt mode persist`, then `/bolt lock public`, and then punch all the chests you want to make public.

### Full Command Reference

| Command | Description |
| --- | --- |
| `/bolt lock [type]` | Locks a block or entity. Optionally specify a protection type (e.g., `public`, `display`). Defaults to `private`. |
| `/bolt unlock` | Removes a protection you own. |
| `/bolt edit (add\|remove) <player>` | Gives or revokes another player's access to your protection. |
| `/bolt modify (add\|remove) <access> <source> <name>` | A more advanced way to edit a protection's access list (ACL). |
| `/bolt group` | Manage custom player groups to use in your protection's access list. |
| `/bolt trust` | Manage your trusted players list, allowing them to access your protections by default. |
| `/bolt transfer <player>` | Transfers ownership of a protection to another player. |
| `/bolt password <password>` | Enter a password to access a password-protected block. |
| `/bolt mode <mode>` | Toggles a player mode, like `persist`. |
| `/bolt info` | Displays information about a protection you are looking at. |
| `/bolt help [command]` | Displays a list of commands or help for a specific command. | 

## Community & Connectivity
*   **Voice Chat**: Enabled server-side for players using the Simple Voice Chat Fabric mod.
*   **Cross-Platform**: Join from either Java or Bedrock Edition on any modern Minecraft version. 