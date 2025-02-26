<script setup lang="ts">
import { useStore } from '@/shared/stores/store'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const { scaleMap } = storeToRefs(useStore())

// const canvasRef = ref<HTMLCanvasElement | null>(null)
// const canvasWidth = 3840
// const canvasHeight = 1663

// const drawMap = (ctx: CanvasRenderingContext2D) => {
// 	const img = new Image()
// 	img.src = 'map.png' // Укажите URL к вашему изображению карты

// 	img.onload = () => {
// 		// Нарисуйте изображение на холсте
// 		ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)

// 		// Нарисуйте пунктирный маршрут
// 		drawDottedLine(ctx, [
// 			{ x: 100, y: 150 },
// 			{ x: 300, y: 400 },
// 			{ x: 500, y: 200 },
// 			{ x: 700, y: 450 },
// 		])
// 	}
// }

// const drawDottedLine = (
// 	ctx: CanvasRenderingContext2D,
// 	points: { x: number; y: number }[],
// ) => {
// 	ctx.strokeStyle = '#fec820' // Цвет линии
// 	ctx.lineWidth = 10 // Толщина линии
// 	ctx.setLineDash([15, 15]) // Установка пунктирного стиля

// 	ctx.beginPath()
// 	ctx.moveTo(points[0].x, points[0].y)

// 	points.forEach((point) => {
// 		ctx.lineTo(point.x, point.y)
// 	})

// 	ctx.stroke()
// 	ctx.setLineDash([]) // Сбросить стиль линий на сплошной
// }

// onMounted(() => {
// 	if (canvasRef.value) {
// 		const ctx = canvasRef.value.getContext('2d')
// 		if (ctx) {
// 			drawMap(ctx)
// 		}
// 	}
// })

const canvasWidth = 3840 // Ширина вашего canvas
const canvasHeight = 1663 // Высота вашего canvas

const canvasRef = ref<HTMLCanvasElement | null>(null)

// Ваша произвольная последовательность координат
const coordinates = [
	{ x: 50, y: 50 },
	{ x: 150, y: 200 },
	{ x: 300, y: 100 },
	{ x: 400, y: 300 },
	{ x: 200, y: 320 },
	{ x: 100, y: 250 },
]

const drawLine = (
	ctx: CanvasRenderingContext2D,
	start: { x: number; y: number },
	end: { x: number; y: number },
) => {
	ctx.lineWidth = 3
	ctx.setLineDash([10, 10]) // Пунктирная линия
	ctx.strokeStyle = 'yellow'
	ctx.beginPath()
	ctx.moveTo(start.x, start.y)
	ctx.lineTo(end.x, end.y)
	ctx.stroke()
	ctx.setLineDash([]) // Сброс оформления
}

const drawWhiteTriangle = (
	ctx: CanvasRenderingContext2D,
	point: { x: number; y: number },
	nextPoint: { x: number; y: number },
) => {
	const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x)
	const triangleSize = 10 // Размер треугольника

	ctx.fillStyle = 'white'
	ctx.beginPath()
	ctx.moveTo(
		point.x + Math.cos(angle - Math.PI / 2) * triangleSize,
		point.y + Math.sin(angle - Math.PI / 2) * triangleSize,
	)
	ctx.lineTo(
		point.x + Math.cos(angle + Math.PI / 2) * triangleSize,
		point.y + Math.sin(angle + Math.PI / 2) * triangleSize,
	)
	ctx.lineTo(
		point.x + Math.cos(angle) * triangleSize * 2,
		point.y + Math.sin(angle) * triangleSize * 2,
	)
	ctx.closePath()
	ctx.fill()
}

const draw = () => {
	const canvas = canvasRef.value
	if (!canvas) return

	const ctx = canvas.getContext('2d')
	if (!ctx) return

	for (let i = 0; i < coordinates.length - 1; i++) {
		const start = coordinates[i]
		const end = coordinates[i + 1]

		// Рисуем линию
		drawLine(ctx, start, end)

		if (i > 0) {
			// Белый треугольник для каждой точки после первой
			drawWhiteTriangle(ctx, start, end)
		}

		// Рисуем последнюю белую черточку перед второй координатой
		if (i != coordinates.length - 2) {
			ctx.strokeStyle = 'white'
			ctx.beginPath()

			let dx = end.x - start.x
			let dy = end.y - start.y

			// Длина вектора AB
			let distance = Math.sqrt(dx * dx + dy * dy)

			// Нормализуем вектор
			let unitDx = dx / distance
			let unitDy = dy / distance

			// Получаем координаты точки, находящейся на расстоянии 30 пикселей от B
			let offsetX = unitDx * 25
			let offsetY = unitDy * 25

			let pointC = {
				x: end.x - offsetX,
				y: end.y - offsetY,
			}

			ctx.moveTo(pointC.x, pointC.y)
			// ctx.moveTo(end.x, end.y)
			ctx.lineTo(end.x + 0, end.y + 0) // немного сдвинем
			ctx.lineWidth = 4
			ctx.stroke()
		}
	}
}

// function coordinate(x1: any, y1: any, x2: any, y2: any) {
// 	let dx = x2 - x1
// 	let dy = y2 - y1

// 	// Длина вектора AB
// 	let distance = Math.sqrt(dx * dx + dy * dy)

// 	// Нормализуем вектор
// 	let unitDx = dx / distance
// 	let unitDy = dy / distance

// 	// Получаем координаты точки, находящейся на расстоянии 30 пикселей от B
// 	let offsetX = unitDx * 30
// 	let offsetY = unitDy * 30

// 	let pointC = {
// 		x: x2 - offsetX,
// 		y: y2 - offsetY,
// 	}

// 	return pointC
// }

onMounted(() => {
	draw()
})
</script>

<template>
	<div class="park-map">
		<!-- <canvas
			ref="canvasRef"
			:width="canvasWidth"
			:height="canvasHeight"
			:style="{ transform: `scale(${scaleMap})` }"
		></canvas> -->
		<canvas
			ref="canvasRef"
			:width="canvasWidth"
			:height="canvasHeight"
			:style="{ transform: `scale(${scaleMap})` }"
		></canvas>
	</div>
</template>

<style scoped lang="scss">
.park-map {
	background: coral;
	width: 100vw;
	height: 100vh;
	overflow: scroll;

	canvas {
		transition: all ease 0.2s;
		transform-origin: left top;
	}
}
</style>
