
# 默认动作

default :
	../z_tools/make img

# 镜像文件生成

ipl.bin : ipl.nas Makefile
	../z_tools/nask ipl.nas ipl.bin ipl.lst

helloos.img : ipl.bin Makefile
	../z_tools/edimg   imgin:../z_tools/fdimg0at.tek \
        wbinimg src:ipl.bin len:512 from:0 to:0   imgout:helloos.img

# 其他指令

asm :
	../z_tools/make -r ipl.bin

img :
	../z_tools/make -r helloos.img

run :
	../z_tools/make img
	copy helloos.img ..\z_tools\qemu\fdimage0.bin
	../z_tools/make -C ../z_tools/qemu

install :
	../z_tools/make.exe img
	../z_tools/imgtol.com w a: helloos.img

clean :
	-del ipl.bin
	-del ipl.lst

src_only :
	../z_tools/make clean
	-del helloos.img
